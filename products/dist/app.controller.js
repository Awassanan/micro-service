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
    getProducts() {
        return this.appService.getProducts();
    }
    getProductById(id) {
        return this.appService.getProductById(id);
    }
    createProduct(productDto) {
        return this.appService.createProduct(productDto);
    }
    updateProduct(id, productDto) {
        return this.appService.updateProduct(id, productDto);
    }
    deleteProduct(id) {
        return this.appService.deleteProduct(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get/products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getProducts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get/products/id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", app_dto_1.ProductDto)
], AppController.prototype, "getProductById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'post/products' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.ProductDto]),
    __metadata("design:returntype", Object)
], AppController.prototype, "createProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'put/products/id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.ProductDto]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete/products/id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteProduct", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map