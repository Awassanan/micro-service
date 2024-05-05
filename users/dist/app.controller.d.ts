import { AppService } from './app.service';
import { UserDto } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUsers(): UserDto[];
    getUserById(id: string): UserDto;
    createUser(userDto: UserDto): any;
    updateUser(data: any): any;
    deleteUser(id: string): any;
}
