"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.orders = [];
    }
    getOrders() {
        return this.orders;
    }
    getOrderById(id) {
        const foundOrder = this.orders.find((order) => order.id === id);
        if (!foundOrder) {
            return null;
        }
        return foundOrder;
    }
    createOrder(orderDto) {
        this.orders.push(orderDto);
        return orderDto;
    }
    updateOrder(id, orderDto) {
        const index = this.orders.findIndex((order) => order.id === id);
        if (index !== -1) {
            this.orders[index] = orderDto;
            return orderDto;
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
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map