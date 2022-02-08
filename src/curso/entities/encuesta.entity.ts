import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Estudiante } from '../../usuario/entities/estudiante.entity';
import { Clase } from './clase.entity';
import { Grupo } from './grupo.entity';
import { Pregunta } from './pregunta.entity';

@Entity()
export class Encuesta {
  @PrimaryGeneratedColumn()
  pk_encuesta: number;
  @Column({ type: 'nvarchar' })
  respuesta: string;
  @Column({ type: 'date' })
  fecha: Date;

  @ManyToOne(() => Pregunta, (pregunta) => pregunta.encuestas)
  @JoinColumn({ name: 'fk_pregunta' })
  pregunta: Pregunta;

  @ManyToOne(() => Clase, (clase) => clase.grupo)
  @JoinColumn({ name: 'fk_grupo' })
  grupo: Grupo;
  @ManyToOne(() => Clase, (clase) => clase.estudiante)
  @JoinColumn({ name: 'fk_estudiante' })
  estudiante: Estudiante;
}
