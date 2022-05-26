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
import { ClaseService } from './services/clase.service';
import { CertificadoService } from './services/certificado.service';
import { EncuestaService } from './services/encuesta.service';
import { PreguntaService } from './services/pregunta.service';
import { CertificadoController } from './controllers/certificado.controller';
import { EncuestaController } from './controllers/encuesta.controller';
import { PreguntaController } from './controllers/pregunta.controller';
import { ClaseController } from './controllers/clase.controller';
import { CursoController } from './controllers/curso.controller';
import { CursoService } from './services/curso.service';

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
    providers: [ClaseService, CertificadoService, EncuestaService, PreguntaService, CursoService],
    controllers: [CertificadoController, EncuestaController, PreguntaController, ClaseController, CursoController],
})
export class CursoModule { }
