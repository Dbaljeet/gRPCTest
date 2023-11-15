import { NestFactory } from '@nestjs/core'
import { UsersModule } from './modules/users/users.module'

async function bootstrap() {
  const app = await NestFactory.create(UsersModule)
  await app.listen(3001)
}
bootstrap()
