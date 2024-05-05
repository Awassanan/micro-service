"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDto = void 0;
class OrderDto {
    constructor(id, orderId, userId, productId, quantity, orderDate, discount) {
        this.id = id;
        this.orderId = orderId;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.orderDate = orderDate;
        this.discount = discount;
    }
}
exports.OrderDto = OrderDto;
//# sourceMappingURL=app.dto.js.map