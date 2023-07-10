import { Module } from '@nestjs/common';
import { EstudianteService } from './services/estudiante.service';
import { EstudianteController } from './controllers/estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CursoModule } from './../curso/curso.module';
import { Instructor } from './entities/instructor.entity';

@Module({
  imports: [CursoModule, TypeOrmModule.forFeature([Estudiante, Instructor])],
  providers: [EstudianteService],
  controllers: [EstudianteController],
})
export class UsuarioModule {}
