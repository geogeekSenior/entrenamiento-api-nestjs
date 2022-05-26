import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEncuestaDto } from '../dtos/encuesta.dto';
import { Encuesta } from '../entities/encuesta.entity';



@Injectable()
export class EncuestaService {
    constructor(@InjectRepository(Encuesta) private encuestaRepo: Repository<Encuesta>) { }

    /**Recibe las respuestas de la Encuesta
   * @data contiene el arreglo con los datos de la Encuesta
   * @throws Error Si ocurre un error en la consulta a la base de datos
   * @return String con el mensaje de satisfacción
   */
    async saveSurvey(data: CreateEncuestaDto[]) {
        try {
            for (let i = 0; i < data.length; i++) {
                let record = this.encuestaRepo.create(data[i]);
                await this.encuestaRepo.save(record);
                if (i === data.length - 1) return `Encuesta registrada exitosamente`

            }

        } catch (error) {
            console.log(`Problemas en función saveSurvey ${error}`)
            throw new InternalServerErrorException(
                'Problemas registrando la encuesta',
            );
        }
    }
}
