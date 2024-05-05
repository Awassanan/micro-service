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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getUsers() {
        return this.appService.getUsers();
    }
    getUserById(id) {
        console.log('id in user contoller: ' + id);
        return this.appService.getUserById(id);
    }
    createUser(userDto) {
        return this.appService.createUser(userDto);
    }
    updateUser(data) {
        console.log('id in update user in user contoller: ', data.id);
        console.log('dto in update user in user controller: ', data.userDto);
        return this.appService.updateUser(data.id, data.userDto);
    }
    deleteUser(id) {
        return this.appService.deleteUser(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get/users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get/users/id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUserById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'post/users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "createUser", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'put/users/id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateUser", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete/users/id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteUser", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map