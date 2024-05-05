import { Injectable } from '@nestjs/common';
import { ProductDto } from './app.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [];

  getProducts(): ProductDto[] {
    return this.products;
  }

  getProductById(id: string) {
    const foundProduct = this.products.find((product) => product.id === id);
    if (!foundProduct) {
      return null;
    }
    return foundProduct;
  }

  createProduct(productDto: ProductDto) {
    this.products.push(productDto);
    return productDto;
  }

  updateProduct(id: string, productDto: ProductDto) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = productDto;
      return productDto;
    }
    return null;
  }

  deleteProduct(id: string) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      const deletedProduct = this.products[index];
      this.products.splice(index, 1);
      return deletedProduct;
    }
    return null;
  }
}
