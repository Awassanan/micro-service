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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
const app_dto_1 = require("./app.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getOrders() {
        return this.appService.getOrders();
    }
    getOrderById(id) {
        return this.appService.getOrderById(id);
    }
    createOrder(orderDto) {
        return this.appService.createOrder(orderDto);
    }
    updateOrder(id, orderDto) {
        return this.appService.updateOrder(id, orderDto);
    }
    deleteOrder(id) {
        return this.appService.deleteOrder(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get/orders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getOrders", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get/orders/id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", app_dto_1.OrderDto)
], AppController.prototype, "getOrderById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'post/orders' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.OrderDto]),
    __metadata("design:returntype", Object)
], AppController.prototype, "createOrder", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'put/orders/id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.OrderDto]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateOrder", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete/orders/id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteOrder", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map