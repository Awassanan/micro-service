import { Body, Controller, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { ProductDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get/products' })
  getProducts(): ProductDto[] {
    return this.appService.getProducts();
  }

  @MessagePattern({ cmd: 'get/products/id' })
  getProductById(@Param('id') id: string): ProductDto {
    return this.appService.getProductById(id);
  }

  @MessagePattern({ cmd: 'post/products' })
  createProduct(@Body() productDto: ProductDto): any {
    return this.appService.createProduct(productDto);
  }

  @MessagePattern({ cmd: 'put/products/id' })
  updateProduct(@Param('id') id: string, @Body() productDto: ProductDto): any {
    return this.appService.updateProduct(id, productDto);
  }

  @MessagePattern({ cmd: 'delete/products/id' })
  deleteProduct(@Param('id') id: string): any {
    return this.appService.deleteProduct(id);
  }
}
