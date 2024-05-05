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
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        const foundUser = this.users.find((user) => user.id === id);
        if (!foundUser) {
            return null;
        }
        return foundUser;
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
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map