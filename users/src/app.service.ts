import { Injectable } from '@nestjs/common';
import { UserDto } from './app.dto';

@Injectable()
export class AppService {
  private users: UserDto[] = [];

  getUsers(): UserDto[] {
    console.log(this.users);
    return this.users;
  }

  getUserById(id: string): UserDto {
    console.log('id in user service: ', id);
    console.log(this.users.find((user) => user.id === id));
    const foundUser = this.users.find((user) => user.id === id);
    if (!foundUser) {
      return null;
    }
    return foundUser;
  }

  createUser(userDto: UserDto) {
    this.users.push(userDto);
    return userDto;
  }

  updateUser(id: string, userDto: UserDto) {
    console.log('id in update user in user service: ', id);
    console.log('dto in update user in user service: ', userDto);
    const index = this.users.findIndex((user: UserDto) => user.id === id);
    if (index !== -1) {
      this.users[index] = userDto;
      return userDto;
    }
    return null;
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = this.users[index];
      this.users.splice(index, 1);
      return deletedUser;
    }
    return null;
  }
}
