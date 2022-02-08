import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificado } from './entities/certificado.entity';
import { Clase } from './entities/clase.entity';
import { Curso } from './entities/curso.entity';
import { Empresa } from './entities/empresa.entity';
import { Encuesta } from './entities/encuesta.entity';
import { Grupo } from './entities/grupo.entity';
import { Horario } from './entities/horario.entity';
import { Pregunta } from './entities/pregunta.entity';
import { Salon } from './entities/salon.entity';
import { Sector } from './entities/sector.entity';
import { Ubicacion } from './entities/ubicacion.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Certificado,
        Clase,
        Curso,
        Empresa,
        Encuesta,
        Grupo,
        Horario,
        Pregunta,
        Salon,
        Sector,
        Ubicacion,
    ])],
    exports: [],
})
export class CursoModule { }
