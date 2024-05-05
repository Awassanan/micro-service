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
        this.products = [];
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        return this.products.find((product) => product.id === id);
    }
    createProduct(productDto) {
        const productData = new app_dto_1.ProductDto(productDto.id, productDto.name, productDto.detail, productDto.price, productDto.stock, productDto.category);
        this.products.push(productData);
        return productData;
    }
    updateProduct(id, productDto) {
        const productData = new app_dto_1.ProductDto(productDto.id, productDto.name, productDto.detail, productDto.price, productDto.stock, productDto.category);
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products[index] = productData;
            return productData;
        }
        return null;
    }
    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.products[index];
            this.products.splice(index, 1);
            return deletedProduct;
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
], AppService.prototype, "getProductById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.ProductDto]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "createProduct", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.ProductDto]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "updateProduct", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "deleteProduct", null);
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map