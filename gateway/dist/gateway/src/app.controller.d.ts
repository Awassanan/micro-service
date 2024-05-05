import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { UserDto } from '../../users/src/app.dto';
import { ProductDto } from '../../products/src/app.dto';
import { OrderDto } from '../../orders/src/app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUsers(): Observable<UserDto[]>;
    getUserById(id: string): Observable<UserDto>;
    creatUser(userDto: UserDto): Observable<UserDto>;
    updateUser(id: string, userDto: UserDto): Observable<UserDto>;
    deleteUser(id: string): Observable<UserDto>;
    getProducts(): Observable<ProductDto[]>;
    getProductById(id: string): Observable<ProductDto>;
    creatProduct(productDto: ProductDto): Observable<ProductDto>;
    updateProduct(id: string, productDto: ProductDto): Observable<ProductDto>;
    deleteProduct(id: string): Observable<ProductDto>;
    getOrders(): Observable<OrderDto[]>;
    getOrderById(id: string): Observable<OrderDto>;
    creatOrder(orderDto: OrderDto): Observable<OrderDto>;
    updateOrder(id: string, orderDto: OrderDto): Observable<OrderDto>;
    deleteOrder(id: string): Observable<OrderDto>;
}
