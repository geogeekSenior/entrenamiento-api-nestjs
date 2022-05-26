import { Module } from '@nestjs/common';
import { AuthService } from './controllers/auth.service';
import { AuthController } from './services/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
