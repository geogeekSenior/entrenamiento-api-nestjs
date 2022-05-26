import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import {
  CreateEstudianteDto,
  UpdateEstudianteDto,
} from '../dtos/estudiante.dto';
import { Estudiante } from '../entities/estudiante.entity';
import { View_Clases_Estudiantes } from '../views/clases_estudiantes.view';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,
    private manager: EntityManager,
  ) { }

  async findAll() {
    try {
      const estudiantes = await this.estudianteRepo.find()
      return estudiantes;
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas realizando la consulta',
      );
    }
  }
  async findOne(id: number) {
    try {
      const estudiante = await this.estudianteRepo.findOne(id, {
        relations: ['clases'],
      });
      if (!estudiante) {
        throw new NotFoundException(`Estudiante #${id} no se encuentra`);
      }
      return estudiante;
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas realizando la consulta',
      );
    }
  }
  /**obtiene los datos del estudiante por usuario 
       * @param usuario usuario en la tabla Estudiante
       * @throws Error Si ocurre un error en la consulta a la base de datos
       * @return {} JSON con los datos del estudiante
      */
  async findOneByUser(usuario: string) {
    try {
      const estudiante = await this.estudianteRepo.findOne({
        where: { usuario },
      });
      if (!estudiante) {
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

  /**Obtiene los datos de las clases del estudiante
     * @param documento estudiante_doc_identidad en la vista View_Clases_Estudiante
     * @throws Error Si ocurre un error en la consulta a la base de datos
     * @return [] Arreglo con los cursos del estudiante
    */
  async findLessonsByDoc(documento: string) {
    try {
      const clases = await this.manager.find(View_Clases_Estudiantes, { estudiante_doc_identidad: documento });
      if (!clases) {
        throw new NotFoundException(
          `Clases para el estudiante con id ${documento} no se encuentran`,
        );
      }
      return clases;
    } catch (error) {
      console.error(`Error consultando clases ${error}`)
      throw new InternalServerErrorException(
        'Problemas realizando la consulta',
      );
    }
  }

  /**Obtiene los datos del certificado para el curso indicado
     * @param documento doc_identidad en la tabla Estudiante
     * @param grupo_id identificador del grupo de la tabla Certificado
     * @throws Error Si ocurre un error en la consulta a la base de datos
     * @return [] Arreglo con los datos del estudiante
    */
  async findDataCertificateByDoc(documento: string, grupo_id: number) {
    try {
      const clases = await this.manager.find(View_Clases_Estudiantes, {
        select: [
          "estudiante_doc_identidad",
          "estudiante_nombre",
          "estudiante_apellido",
          "clase_estado_certificado",
          "curso_intensidad",
          "curso_nombre",
          "ubicacion_nombre",
          "grupo_id",
          "grupo_tipo",
          "grupo_fecha_inicio",
          "grupo_fecha_fin",
          "instructor_nombre",
          "instructor_doc_identidad",
          "instructor_apellido",
          "instructor_titulo",
          "ubicacion_pais"
        ],
        where: {
          estudiante_doc_identidad: documento,
          grupo_id
        }
      });
      if (!clases) {
        throw new NotFoundException(
          `Clases para el estudiante con id ${documento} no se encuentran`,
        );
      }
      return clases;
    } catch (error) {
      console.error(`Error consultando clases ${error}`)
      throw new InternalServerErrorException(
        'Problemas realizando la consulta',
      );
    }
  }
  /**Registra los datos del estudiante
      * @data contiene el json con los datos del estudiante
      * @throws Error Si ocurre un error en la consulta a la base de datos
      * @return boolean dependiendo del estado de la transacción
      */
  async create(data: CreateEstudianteDto) {
    try {
      const pk_estudiante = await this.estudianteRepo.find({ select: ["pk_estudiante"], where: { doc_identidad: data.doc_identidad } })
      if (pk_estudiante){
        return `Estudiante con documento#${data.doc_identidad} ya se encuentra registrado`
      }
      const newEstudiante = this.estudianteRepo.create(data);
      return await this.estudianteRepo.save(newEstudiante);
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas registrando el estudiante',
      );
    }
  }
  /**Actualiza los datos del estudiante
      * @payload changes contiene el arreglo con los datos del Estudiante
      * @param id pk_estudiante en la tabla Estudiante
      * @throws Error Si ocurre un error en la consulta a la base de datos
      * @return [] con la respuesta
      */
  async update(id: number, changes: UpdateEstudianteDto) {
    try {
      const estudiante = await this.estudianteRepo.findOne(id);
      if (!estudiante) {
        throw new NotFoundException(
          `El estudiante a actualizar no se encuentra registrado`,
        );
      }
      this.estudianteRepo.merge(estudiante, changes);
      return this.estudianteRepo.save(estudiante);
    } catch (error) {
      throw new InternalServerErrorException(
        'Problemas actualizando el estudiante',
      );
    }
  }
}
