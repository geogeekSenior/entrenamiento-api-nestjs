import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encuesta } from '../entities/encuesta.entity';

@Injectable()
export class EncuestaService {
    constructor(@InjectRepository(Encuesta) private encuestaRepo: Repository<Encuesta>) { }

    async getStateSurvey(fk_estudiante: number,fk_grupo:number ){
        
    }
}
