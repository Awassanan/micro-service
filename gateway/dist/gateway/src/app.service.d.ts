import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UserDto } from '../../users/src/app.dto';
import { ProductDto } from '../../products/src/app.dto';
import { OrderDto } from '../../orders/src/app.dto';
export declare class AppService {
    private readonly userClient;
    private readonly productClient;
    private readonly orderClient;
    constructor(userClient: ClientProxy, productClient: ClientProxy, orderClient: ClientProxy);
    getUsers(): Observable<UserDto[]>;
    getUserById(id: string): Observable<UserDto>;
    createUser(userDto: UserDto): Observable<any>;
    updateUser(id: string, userDto: UserDto): Observable<any>;
    deleteUser(id: string): Observable<any>;
    getProducts(): Observable<ProductDto[]>;
    getProductById(id: string): Observable<ProductDto>;
    createProduct(productDto: ProductDto): Observable<any>;
    updateProduct(id: string, productDto: ProductDto): Observable<any>;
    deleteProduct(id: string): Observable<any>;
    getOrders(): Observable<OrderDto[]>;
    getOrderById(id: string): Observable<OrderDto>;
    createOrder(orderDto: OrderDto): Observable<any>;
    updateOrder(id: string, orderDto: OrderDto): Observable<any>;
    deleteOrder(id: string): Observable<any>;
}
