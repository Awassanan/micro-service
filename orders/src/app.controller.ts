import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { OrderDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get/orders' })
  getOrders(): OrderDto[] {
    return this.appService.getOrders();
  }

  @MessagePattern({ cmd: 'get/orders/id' })
  getOrderById(id: string): OrderDto {
    return this.appService.getOrderById(id);
  }

  @MessagePattern({ cmd: 'post/orders' })
  createOrder(orderDto: OrderDto): any {
    return this.appService.createOrder(orderDto);
  }

  @MessagePattern({ cmd: 'put/orders/id' })
  updateOrder(data: any): any {
    return this.appService.updateOrder(data.id, data.orderDto);
  }

  @MessagePattern({ cmd: 'delete/orders/id' })
  deleteOrder(id: string): any {
    return this.appService.deleteOrder(id);
  }
}
