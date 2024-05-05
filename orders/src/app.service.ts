import { Injectable } from '@nestjs/common';
import { OrderDto } from './app.dto';

@Injectable()
export class AppService {
  private orders: OrderDto[] = [];

  getOrders(): OrderDto[] {
    return this.orders;
  }

  getOrderById(id: string) {
    const foundOrder = this.orders.find((order) => order.id === id);
    if (!foundOrder) {
      return null;
    }
    return foundOrder;
  }

  createOrder(orderDto: OrderDto) {
    this.orders.push(orderDto);
    return orderDto;
  }

  updateOrder(id: string, orderDto: OrderDto) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      this.orders[index] = orderDto;
      return orderDto;
    }
    return null;
  }

  deleteOrder(id: string) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      const deletedOrder = this.orders[index];
      this.orders.splice(index, 1);
      return deletedOrder;
    }
    return null;
  }
}
