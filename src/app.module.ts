import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as Joi from 'joi';

import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CursoModule } from './curso/curso.module';
import { AuthModule } from './auth/auth.module';

import { AppController } from './app.controller';
import { enviroments } from './enviroments';
import { AppService } from './app.service';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.dev.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        SQL_SERVER: Joi.string().required(),
        SQL_DATABASE: Joi.string().required(),
        SQL_USER: Joi.string().required(),
        SQL_PASSWORD: Joi.string().required(),
        SQL_PORT: Joi.number().required(),
        RUTA_MATERIAL: Joi.string().required(),
        HOST_MATERIAL: Joi.string().required(),
      }),
    }),
    AuthModule,
    CursoModule,
    UsuarioModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log(dataSource);
  }
}
