"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const app_dto_1 = require("./app.dto");
let AppService = class AppService {
    constructor() {
        this.orders = [];
    }
    getOrders() {
        return this.orders;
    }
    getOrderById(id) {
        return this.orders.find((order) => order.id === id);
    }
    createOrder(orderDto) {
        const orderData = new app_dto_1.OrderDto(orderDto.id, orderDto.orderId, orderDto.userId, orderDto.productId, orderDto.quantity, orderDto.orderDate, orderDto.discount);
        this.orders.push(orderData);
        return orderData;
    }
    updateOrder(id, orderDto) {
        const orderData = new app_dto_1.OrderDto(orderDto.id, orderDto.orderId, orderDto.userId, orderDto.productId, orderDto.quantity, orderDto.orderDate, orderDto.discount);
        const index = this.orders.findIndex((order) => order.id === id);
        if (index !== -1) {
            this.orders[index] = orderData;
            return orderData;
        }
        return null;
    }
    deleteOrder(id) {
        const index = this.orders.findIndex((order) => order.id === id);
        if (index !== -1) {
            const deletedOrder = this.orders[index];
            this.orders.splice(index, 1);
            return deletedOrder;
        }
        return null;
    }
};
exports.AppService = AppService;
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "getOrderById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.OrderDto]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "createOrder", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.OrderDto]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "updateOrder", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "deleteOrder", null);
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map