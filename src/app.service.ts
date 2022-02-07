import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const name = this.configService.sqlserver.database;
    return `Bienvenido a la API REST de entrenamiento, en este momento esta conectado a ${name}`;
  }
}
