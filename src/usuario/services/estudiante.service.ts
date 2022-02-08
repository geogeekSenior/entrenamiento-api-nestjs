import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateEstudianteDto,
  UpdateEstudianteDto,
} from '../dtos/estudiante.dto';
import { Estudiante } from '../entities/estudiante.entity';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,
  ) {}

  async findOne(id: number) {
    try {
      const estudiante = await this.estudianteRepo.findOne(id);
      if (!Estudiante) {
        throw new NotFoundException(`Estudiante #${id} no se encuentra`);
      }
      return estudiante;
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas realizando la consulta',
      );
    }
  }

  async findOneByUser(usuario: string) {
    try {
      const estudiante = await this.estudianteRepo.findOne({
        where: { usuario },
      });
      if (!Estudiante) {
        throw new NotFoundException(
          `Estudiante con usuario ${usuario} no se encuentra`,
        );
      }
      return estudiante;
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas realizando la consulta',
      );
    }
  }

  async create(data: CreateEstudianteDto) {
    try {
      const newEstudiante = this.estudianteRepo.create(data);
      return await this.estudianteRepo.save(newEstudiante);
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas registrando el estudiante',
      );
    }
  }

  async update(id: number, changes: UpdateEstudianteDto) {
    try {
      const estudiante = await this.estudianteRepo.findOne(id);
      this.estudianteRepo.merge(estudiante, changes);
      return this.estudianteRepo.save(estudiante);
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas actualizando el estudiante',
      );
    }
  }
}
