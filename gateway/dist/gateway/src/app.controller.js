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
const rxjs_1 = require("rxjs");
const app_dto_1 = require("../../users/src/app.dto");
const app_dto_2 = require("../../products/src/app.dto");
const app_dto_3 = require("../../orders/src/app.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getUsers() {
        return this.appService.getUsers();
    }
    getUserById(id) {
        return this.appService.getUserById(id);
    }
    creatUser(userDto) {
        return this.appService.createUser(userDto);
    }
    updateUser(id, userDto) {
        return this.appService.updateUser(id, userDto);
    }
    deleteUser(id) {
        return this.appService.deleteUser(id);
    }
    getProducts() {
        return this.appService.getProducts();
    }
    getProductById(id) {
        return this.appService.getProductById(id);
    }
    creatProduct(productDto) {
        return this.appService.createProduct(productDto);
    }
    updateProduct(id, productDto) {
        return this.appService.updateProduct(id, productDto);
    }
    deleteProduct(id) {
        return this.appService.deleteProduct(id);
    }
    getOrders() {
        return this.appService.getOrders();
    }
    getOrderById(id) {
        return this.appService.getOrderById(id);
    }
    creatOrder(orderDto) {
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
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)('users'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.UserDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "creatUser", null);
__decorate([
    (0, common_1.Put)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.UserDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('products/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)('products'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_2.ProductDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "creatProduct", null);
__decorate([
    (0, common_1.Put)('products/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_2.ProductDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('products/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)('orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Get)('orders/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Post)('orders'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_3.OrderDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "creatOrder", null);
__decorate([
    (0, common_1.Put)('orders/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_3.OrderDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Delete)('orders/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "deleteOrder", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map