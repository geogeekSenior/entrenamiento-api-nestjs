import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { empty } from 'rxjs';
import { Repository } from 'typeorm';
import { Clase } from '../entities/clase.entity';

@Injectable()
export class ClaseService {
  constructor(
    @InjectRepository(Clase)
    private claseRepo: Repository<Clase>,
  ) {}

  async getStateDateSurvey(pfk_estudiante: number, pfk_grupo: number) {
    try {
      console.log(pfk_estudiante, pfk_grupo);
      const state = await this.claseRepo.find({
        select: ['fecha', 'estado_encuesta'],
        where: { pfk_estudiante: pfk_estudiante, pfk_grupo: pfk_grupo },
      });
      console.log(state[0].estado_encuesta, state[0].fecha);
      if (state.length === 0) {
        console.log('vacio');
        throw new NotFoundException(
          `Estado para la clase ${pfk_grupo} no se encuentra`,
        );
      } else if (state[0].estado_encuesta === 'Deshabilitado') return false;
      else if (state[0].fecha == null) return false;
      else return true;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Problemas realizando la consulta',
      );
    }
  }
}
