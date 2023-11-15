import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

@Controller('users')
export class UsersController {
  @GrpcMethod('UsersService', 'CreateUser')
  createUser() {
    return { id: 1, email: 'sdasdsa@sdad.com', password: 'abc' }
  }
}
