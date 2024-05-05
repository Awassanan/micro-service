import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { UserDto } from '../../users/src/app.dto';
import { ProductDto } from '../../products/src/app.dto';
import { OrderDto } from '../../orders/src/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // users
  @Get('users')
  getUsers(): Observable<UserDto[]> {
    return this.appService.getUsers();
  }

  @Get('users/:id')
  getUserById(@Param('id') id: string): Observable<UserDto> {
    console.log('id in gateway contoller: ' + id);
    console.log(typeof id);
    return this.appService.getUserById(id);
  }

  @Post('users')
  creatUser(@Body() userDto: UserDto): Observable<UserDto> {
    return this.appService.createUser(userDto);
  }

  @Put('users/:id')
  updateUser(
    @Param('id') id: string,
    @Body() userDto: UserDto,
  ): Observable<UserDto> {
    console.log('id in update user in gateway contoller: ', id);
    console.log('dto in update user in gateway controller: ', userDto);
    return this.appService.updateUser(id, userDto);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string): Observable<UserDto> {
    return this.appService.deleteUser(id);
  }

  // product
  @Get('products')
  getProducts(): Observable<ProductDto[]> {
    return this.appService.getProducts();
  }

  @Get('products/:id')
  getProductById(@Param('id') id: string): Observable<ProductDto> {
    return this.appService.getProductById(id);
  }

  @Post('products')
  creatProduct(@Body() productDto: ProductDto): Observable<ProductDto> {
    return this.appService.createProduct(productDto);
  }

  @Put('products/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() productDto: ProductDto,
  ): Observable<ProductDto> {
    return this.appService.updateProduct(id, productDto);
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string): Observable<ProductDto> {
    return this.appService.deleteProduct(id);
  }

  // order
  @Get('orders')
  getOrders(): Observable<OrderDto[]> {
    return this.appService.getOrders();
  }

  @Get('orders/:id')
  getOrderById(@Param('id') id: string): Observable<OrderDto> {
    return this.appService.getOrderById(id);
  }

  @Post('orders')
  creatOrder(@Body() orderDto: OrderDto): Observable<OrderDto> {
    return this.appService.createOrder(orderDto);
  }

  @Put('orders/:id')
  updateOrder(
    @Param('id') id: string,
    @Body() orderDto: OrderDto,
  ): Observable<OrderDto> {
    return this.appService.updateOrder(id, orderDto);
  }
  @Delete('orders/:id')
  deleteOrder(@Param('id') id: string): Observable<OrderDto> {
    return this.appService.deleteOrder(id);
  }
}
