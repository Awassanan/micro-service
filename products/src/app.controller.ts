import { Controller } from '@nestjs/common';
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
  getProductById(id: string): ProductDto {
    return this.appService.getProductById(id);
  }

  @MessagePattern({ cmd: 'post/products' })
  createProduct(productDto: ProductDto): any {
    return this.appService.createProduct(productDto);
  }

  @MessagePattern({ cmd: 'put/products/id' })
  updateProduct(data: any): any {
    return this.appService.updateProduct(data.id, data.productDto);
  }

  @MessagePattern({ cmd: 'delete/products/id' })
  deleteProduct(id: string): any {
    return this.appService.deleteProduct(id);
  }
}
