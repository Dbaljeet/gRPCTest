import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: 'users',
          protoPath: join(
            __dirname,
            '../../../node_modules/protos/proto/users.proto'
          )
        }
      }
    ])
  ],
  controllers: [UsersController]
})
export class UsersModule {}
