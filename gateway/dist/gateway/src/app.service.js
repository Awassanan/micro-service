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
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const app_dto_1 = require("../../users/src/app.dto");
const app_dto_2 = require("../../products/src/app.dto");
const app_dto_3 = require("../../orders/src/app.dto");
let AppService = class AppService {
    constructor(userClient, productClient, orderClient) {
        this.userClient = userClient;
        this.productClient = productClient;
        this.orderClient = orderClient;
    }
    getUsers() {
        return this.userClient.send({ cmd: 'get/users' }, {});
    }
    getUserById(id) {
        return this.userClient.send({ cmd: 'get/users/id' }, { id });
    }
    createUser(userDto) {
        return this.userClient.send({ cmd: 'post/users' }, { userDto });
    }
    updateUser(id, userDto) {
        return this.userClient.send({ cmd: 'put/users/id' }, { id, userDto });
    }
    deleteUser(id) {
        return this.userClient.send({ cmd: 'delete/users/id' }, { id });
    }
    getProducts() {
        return this.productClient.send({ cmd: 'get/products' }, {});
    }
    getProductById(id) {
        return this.productClient.send({ cmd: 'get/products/id' }, { id });
    }
    createProduct(productDto) {
        return this.productClient.send({ cmd: 'post/products' }, { productDto });
    }
    updateProduct(id, productDto) {
        return this.productClient.send({ cmd: 'put/products/id' }, { id, productDto });
    }
    deleteProduct(id) {
        return this.productClient.send({ cmd: 'delete/products/id' }, { id });
    }
    getOrders() {
        return this.orderClient.send({ cmd: 'get/orders' }, {});
    }
    getOrderById(id) {
        return this.orderClient.send({ cmd: 'get/orders/id' }, { id });
    }
    createOrder(orderDto) {
        return this.orderClient.send({ cmd: 'post/orders' }, { orderDto });
    }
    updateOrder(id, orderDto) {
        return this.orderClient.send({ cmd: 'put/orders/id' }, { id, orderDto });
    }
    deleteOrder(id) {
        return this.orderClient.send({ cmd: 'delete/orders/id' }, { id });
    }
};
exports.AppService = AppService;
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "getUserById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.UserDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "createUser", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.UserDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "updateUser", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "deleteUser", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "getProductById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_2.ProductDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "createProduct", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_2.ProductDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "updateProduct", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "deleteProduct", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "getOrderById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_3.OrderDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "createOrder", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_3.OrderDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "updateOrder", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppService.prototype, "deleteOrder", null);
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __param(1, (0, common_1.Inject)('PRODUCT_SERVICE')),
    __param(2, (0, common_1.Inject)('ORDER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], AppService);
//# sourceMappingURL=app.service.js.map