import { UserDto } from './app.dto';
export declare class AppService {
    private users;
    getUsers(): UserDto[];
    getUserById(id: string): UserDto;
    createUser(userDto: UserDto): UserDto;
    updateUser(id: string, userDto: UserDto): UserDto;
    deleteUser(id: string): UserDto;
}
