import { Inject, Injectable } from '@nestjs/common';
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

  // user
  getUsers(): Observable<UserDto[]> {
    return this.userClient.send({ cmd: 'get/users' }, {});
  }

  getUserById(id: string): Observable<UserDto> {
    console.log('id in gateway service', id);
    return this.userClient.send({ cmd: 'get/users/id' }, id);
  }

  createUser(userDto: UserDto): Observable<any> {
    return this.userClient.send({ cmd: 'post/users' }, userDto);
  }

  updateUser(id: string, userDto: UserDto): Observable<any> {
    return this.userClient.send({ cmd: 'put/users/id' }, { id, userDto });
  }

  deleteUser(id: string): Observable<any> {
    return this.userClient.send({ cmd: 'delete/users/id' }, id);
  }

  // product
  getProducts(): Observable<ProductDto[]> {
    return this.productClient.send({ cmd: 'get/products' }, {});
  }

  getProductById(id: string): Observable<ProductDto> {
    return this.productClient.send({ cmd: 'get/products/id' }, id);
  }

  createProduct(productDto: ProductDto): Observable<any> {
    return this.productClient.send({ cmd: 'post/products' }, productDto);
  }

  updateProduct(id: string, productDto: ProductDto): Observable<any> {
    return this.productClient.send(
      { cmd: 'put/products/id' },
      { id, productDto },
    );
  }

  deleteProduct(id: string): Observable<any> {
    return this.productClient.send({ cmd: 'delete/products/id' }, id);
  }

  //order
  getOrders(): Observable<OrderDto[]> {
    return this.orderClient.send({ cmd: 'get/orders' }, {});
  }

  getOrderById(id: string): Observable<OrderDto> {
    return this.orderClient.send({ cmd: 'get/orders/id' }, id);
  }

  createOrder(orderDto: OrderDto): Observable<any> {
    return this.orderClient.send({ cmd: 'post/orders' }, orderDto);
  }

  updateOrder(id: string, orderDto: OrderDto): Observable<any> {
    return this.orderClient.send(
      { cmd: 'put/orders/id' },
      { id: id, orderDto: orderDto },
    );
  }

  deleteOrder(id: string): Observable<any> {
    return this.orderClient.send({ cmd: 'delete/orders/id' }, id);
  }
}
