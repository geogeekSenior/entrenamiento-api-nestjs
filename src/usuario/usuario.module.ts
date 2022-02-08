import { Module } from '@nestjs/common';
import { EstudianteService } from './services/estudiante.service';

@Module({
  providers: [EstudianteService]
})
export class UsuarioModule {}
