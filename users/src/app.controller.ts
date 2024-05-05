import { Body, Controller, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get/users' })
  getUsers(): UserDto[] {
    return this.appService.getUsers();
  }

  @MessagePattern({ cmd: 'get/users/id' })
  getUserById(@Param('id') id: string): UserDto {
    return this.appService.getUserById(id);
  }

  @MessagePattern({ cmd: 'post/users' })
  createUser(@Body() userDto: UserDto): any {
    return this.appService.createUser(userDto);
  }

  @MessagePattern({ cmd: 'put/users/id' })
  updateUser(@Param('id') id: string, @Body() userDto: UserDto): any {
    return this.appService.updateUser(id, userDto);
  }

  @MessagePattern({ cmd: 'delete/users/id' })
  deleteUser(@Param('id') id: string): any {
    return this.appService.deleteUser(id);
  }
}
