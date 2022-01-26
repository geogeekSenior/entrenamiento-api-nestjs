import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CursoModule } from './curso/curso.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [AuthModule, CursoModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
