import { Controller, OnModuleInit, Inject, Get, Post } from '@nestjs/common'
import { ClientGrpc } from '@nestjs/microservices'
import { Observable } from 'rxjs'

interface UserService {
  createUser({}): Observable<any>
}

@Controller('users')
export class UsersController implements OnModuleInit {
  private userService: UserService

  constructor(@Inject('USERS_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UsersService')
  }

  @Post()
  async createUser() {
    return this.userService.createUser({ email: 'dsad', password: '' })
  }
}
