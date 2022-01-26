import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import config from './config';
import { CursoModule } from './curso/curso.module';
import { enviroments } from './enviroments';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.dev.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        SQL_HOST: Joi.string().required(),
        SQL_DATABASE: Joi.string().required(),
        SQL_USUARIO: Joi.string().required(),
        SQL_PASSWORD: Joi.string().required(),
        SQL_PORT: Joi.number().required(),
      }),
    }),
    AuthModule,
    CursoModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
