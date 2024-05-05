import { OrderDto } from './app.dto';
export declare class AppService {
    private orders;
    getOrders(): OrderDto[];
    getOrderById(id: string): OrderDto;
    createOrder(orderDto: OrderDto): OrderDto;
    updateOrder(id: string, orderDto: OrderDto): OrderDto;
    deleteOrder(id: string): OrderDto;
}
