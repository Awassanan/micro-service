import { AppService } from './app.service';
import { OrderDto } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getOrders(): OrderDto[];
    getOrderById(id: string): OrderDto;
    createOrder(orderDto: OrderDto): any;
    updateOrder(id: string, orderDto: OrderDto): any;
    deleteOrder(id: string): any;
}
