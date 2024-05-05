import { Body, Injectable, Param } from '@nestjs/common';
import { UserDto } from './app.dto';

@Injectable()
export class AppService {
  private users: UserDto[] = [];

  getUsers(): UserDto[] {
    return this.users;
  }

  getUserById(@Param('id') id: string) {
    return this.users.find((user) => user.id === id);
  }

  createUser(@Body() userDto: UserDto) {
    this.users.push(userDto);
    return userDto;
  }

  updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = userDto;
      return userDto;
    }
    return null;
  }

  deleteUser(@Param('id') id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = this.users[index];
      this.users.splice(index, 1);
      return deletedUser;
    }
    return null;
  }
}
