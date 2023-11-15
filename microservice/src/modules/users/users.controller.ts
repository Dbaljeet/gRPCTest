import { Body, Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { createUserDto } from './dto/user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersService', 'CreateUser')
  createUser(@Body() x: createUserDto) {
    console.log(x)
    return { id: 6, email: 'sdasdsa@sdad.com', password: 'abcc' }
  }
}
