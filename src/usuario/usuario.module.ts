import { Module } from '@nestjs/common';
import { EstudianteService } from './services/estudiante.service';
import { EstudianteController } from './controllers/estudiante.controller';

@Module({
  providers: [EstudianteService],
  controllers: [EstudianteController]
})
export class UsuarioModule {}
