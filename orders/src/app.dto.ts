export interface OrderDto {
  id: string;
  orderId: string;
  userId: string;
  productId: string;
  quantity: number;
  orderDate: string;
  discount: number;
  paymentChannel: string;
  destinationAddress: string;
}
