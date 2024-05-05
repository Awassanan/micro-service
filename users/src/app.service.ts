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
    const userData = new UserDto(
      userDto.id,
      userDto.firstName,
      userDto.lastName,
      userDto.dateOfBirth,
      userDto.address,
      userDto.email,
      userDto.phone,
    );
    this.users.push(userData);
    return userData;
  }

  updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    const userData = new UserDto(
      userDto.id,
      userDto.firstName,
      userDto.lastName,
      userDto.dateOfBirth,
      userDto.address,
      userDto.email,
      userDto.phone,
    );

    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = userData;
      return userData;
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
