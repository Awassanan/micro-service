import { Controller } from '@nestjs/common';
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
  getUserById(id: string): UserDto {
    console.log('id in user contoller: ' + id);
    return this.appService.getUserById(id);
  }

  @MessagePattern({ cmd: 'post/users' })
  createUser(userDto: UserDto): any {
    return this.appService.createUser(userDto);
  }

  @MessagePattern({ cmd: 'put/users/id' })
  updateUser(data: any): any {
    return this.appService.updateUser(data.id, data.userDto);
  }

  @MessagePattern({ cmd: 'delete/users/id' })
  deleteUser(id: string): any {
    return this.appService.deleteUser(id);
  }
}
