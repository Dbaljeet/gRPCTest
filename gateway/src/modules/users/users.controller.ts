import { Controller, OnModuleInit, Inject, Post, Body } from '@nestjs/common'
import { ClientGrpc } from '@nestjs/microservices'
import { createUserDto } from './dto/user.dto'
import { UsersServiceClient } from './users.pb'

@Controller('users')
export class UsersController implements OnModuleInit {
  private userService: UsersServiceClient

  constructor(@Inject('USERS_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService =
      this.client.getService<UsersServiceClient>('UsersService')
  }

  @Post()
  async createUser(@Body() body: createUserDto) {
    return this.userService.createUser(body)
  }
}
