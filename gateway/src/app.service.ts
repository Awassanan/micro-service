import { Body, Inject, Injectable, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UserDto } from '../../users/src/app.dto';
import { ProductDto } from '../../products/src/app.dto';
import { OrderDto } from '../../orders/src/app.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Observable<string> {
    return this.userClient.send({ cmd: 'get/users' }, {});
  }

  getUserById(@Param('id') id: string): Observable<string> {
    return this.userClient.send({ cmd: 'get/users/id' }, { id });
  }

  createUser(@Body() userDto: UserDto): Observable<string> {
    return this.userClient.send({ cmd: 'post/users' }, { userDto });
  }

  updateUser(
    @Param('id') id: string,
    @Body() userDto: UserDto,
  ): Observable<string> {
    return this.userClient.send({ cmd: 'put/users/id' }, { id, userDto });
  }

  deleteUser(@Param('id') id: string): Observable<string> {
    return this.userClient.send({ cmd: 'delete/users/id' }, { id });
  }

  getProducts(): Observable<string> {
    return this.productClient.send({ cmd: 'get/products' }, {});
  }

  getProductById(@Param('id') id: string): Observable<string> {
    return this.productClient.send({ cmd: 'get/products/id' }, { id });
  }

  createProduct(@Body() productDto: ProductDto): Observable<string> {
    return this.productClient.send({ cmd: 'post/products' }, { productDto });
  }

  updateProduct(
    @Param('id') id: string,
    @Body() productDto: ProductDto,
  ): Observable<string> {
    return this.productClient.send(
      { cmd: 'put/products/id' },
      { id, productDto },
    );
  }

  deleteProduct(@Param('id') id: string): Observable<string> {
    return this.productClient.send({ cmd: 'delete/products/id' }, { id });
  }

  getOrders(): Observable<string> {
    return this.orderClient.send({ cmd: 'get/orders' }, {});
  }

  getOrderById(@Param('id') id: string): Observable<string> {
    return this.orderClient.send({ cmd: 'get/orders/id' }, { id });
  }

  createOrder(@Body() orderDto: OrderDto): Observable<string> {
    return this.orderClient.send({ cmd: 'post/orders' }, { orderDto });
  }

  updateOrder(
    @Param('id') id: string,
    @Body() orderDto: OrderDto,
  ): Observable<string> {
    return this.orderClient.send({ cmd: 'put/orders/id' }, { id, orderDto });
  }

  deleteOrder(@Param('id') id: string): Observable<string> {
    return this.orderClient.send({ cmd: 'delete/orders/id' }, { id });
  }
}
