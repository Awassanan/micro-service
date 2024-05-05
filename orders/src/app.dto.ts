export class OrderDto {
  id: string;
  orderId: string;
  userId: string;
  productId: string;
  quantity: number;
  orderDate: string;
  discount: number;

  constructor(
    id: string,
    orderId: string,
    userId: string,
    productId: string,
    quantity: number,
    orderDate: string,
    discount: number,
  ) {
    this.id = id;
    this.orderId = orderId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
    this.orderDate = orderDate;
    this.discount = discount;
  }
}