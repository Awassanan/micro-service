import { Body, Injectable, Param } from '@nestjs/common';
import { ProductDto } from './app.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [];

  getProducts(): ProductDto[] {
    return this.products;
  }

  getProductById(@Param('id') id: string) {
    return this.products.find((product) => product.id === id);
  }

  createProduct(@Body() productDto: ProductDto) {
    this.products.push(productDto);
    return productDto;
  }

  updateProduct(@Param('id') id: string, @Body() productDto: ProductDto) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = productDto;
      return productDto;
    }
    return null;
  }

  deleteProduct(@Param('id') id: string) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      const deletedProduct = this.products[index];
      this.products.splice(index, 1);
      return deletedProduct;
    }
    return null;
  }
}
