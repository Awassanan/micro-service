import { Body, Injectable, Param } from '@nestjs/common';
import { OrderDto } from './app.dto';

@Injectable()
export class AppService {
  private orders: OrderDto[] = [];

  getProducts(): OrderDto[] {
    return this.orders;
  }

  getProductById(@Param('id') id: string) {
    return this.orders.find((order) => order.id === id);
  }

  createProduct(@Body() orderDto: OrderDto) {
    const orderData = new OrderDto(
      orderDto.id,
      orderDto.orderId,
      orderDto.userId,
      orderDto.productId,
      orderDto.quantity,
      orderDto.orderDate,
      orderDto.discount,
    );
    this.orders.push(orderData);
    return orderData;
  }

  updateProduct(@Param('id') id: string, @Body() orderDto: OrderDto) {
    const orderData = new OrderDto(
      orderDto.id,
      orderDto.orderId,
      orderDto.userId,
      orderDto.productId,
      orderDto.quantity,
      orderDto.orderDate,
      orderDto.discount,
    );

    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      this.orders[index] = orderData;
      return orderData;
    }
    return null;
  }

  deleteProduct(@Param('id') id: string) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      const deletedProduct = this.orders[index];
      this.orders.splice(index, 1);
      return deletedProduct;
    }
    return null;
  }
}
