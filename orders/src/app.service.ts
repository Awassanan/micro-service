import { Body, Injectable, Param } from '@nestjs/common';
import { OrderDto } from './app.dto';

@Injectable()
export class AppService {
  private orders: OrderDto[] = [];

  getOrders(): OrderDto[] {
    return this.orders;
  }

  getOrderById(@Param('id') id: string) {
    return this.orders.find((order) => order.id === id);
  }

  createOrder(@Body() orderDto: OrderDto) {
    this.orders.push(orderDto);
    return orderDto;
  }

  updateOrder(@Param('id') id: string, @Body() orderDto: OrderDto) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      this.orders[index] = orderDto;
      return orderDto;
    }
    return null;
  }

  deleteOrder(@Param('id') id: string) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      const deletedOrder = this.orders[index];
      this.orders.splice(index, 1);
      return deletedOrder;
    }
    return null;
  }
}
