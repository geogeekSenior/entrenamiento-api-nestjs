import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pregunta } from '../entities/pregunta.entity';

@Injectable()
export class PreguntaService {
    constructor(
        @InjectRepository(Pregunta)
        private preguntasRepo: Repository<Pregunta>
    ) { }
    /**Obtiene las preguntas de encuesta 
    * @throws Error Si ocurre un error en la consulta a la base de datos
    * @return [] Arreglo con los datos del estudiante
    */
    async findAll() {
        try {
            const preguntas = await this.preguntasRepo.find()
            return preguntas;
        } catch (error) {
            throw new InternalServerErrorException(
                'Problemas realizando la consulta',
            );
        }
    }
    /**Obtiene las preguntas de encuesta por categoría 
     * @param categoria categoria de las preguntas en la tabla Preguntas
     * @throws Error Si ocurre un error en la consulta a la base de datos
     * @return [] Arreglo con los datos del estudiante
    */
    async findAllByCategory(categoria: string) {
        try {
            const preguntas = await this.preguntasRepo.find({ where: {categoria} });
            return preguntas;
        } catch (error) {
            throw new InternalServerErrorException(
                'Problemas realizando la consulta',
            );
        }
    }
}
