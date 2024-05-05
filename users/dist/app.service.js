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
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    createUser(userDto) {
        this.users.push(userDto);
        return userDto;
    }
    updateUser(id, userDto) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index !== -1) {
            this.users[index] = userDto;
            return userDto;
        }
        return null;
    }
    deleteUser(id) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index !== -1) {
            const deletedUser = this.users[index];
            this.users.splice(index, 1);
            return deletedUser;
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
], AppService.prototype, "getUserById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "createUser", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "updateUser", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "deleteUser", null);
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map