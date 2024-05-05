import { Body, Controller, Param } from '@nestjs/common';
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
  getOrderById(@Param('id') id: string): OrderDto {
    return this.appService.getOrderById(id);
  }

  @MessagePattern({ cmd: 'post/orders' })
  createOrder(@Body() orderDto: OrderDto): any {
    return this.appService.createOrder(orderDto);
  }

  @MessagePattern({ cmd: 'put/orders/id' })
  updateOrder(@Param('id') id: string, @Body() orderDto: OrderDto): any {
    return this.appService.updateOrder(id, orderDto);
  }

  @MessagePattern({ cmd: 'delete/orders/id' })
  deleteOrder(@Param('id') id: string): any {
    return this.appService.deleteOrder(id);
  }
}
