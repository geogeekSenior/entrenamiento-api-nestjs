import { Estudiante } from 'src/usuario/entities/estudiante.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Clase } from './clase.entity';
import { Grupo } from './grupo.entity';

@Entity()
export class Certificado {
  @PrimaryGeneratedColumn()
  pk_certificado: number;

  @Column({ type: 'date' })
  fecha: Date;

  @ManyToOne(() => Clase, (clase) => clase.grupo)
  @JoinColumn({ name: 'fk_grupo' })
  grupo: Grupo;

  @ManyToOne(() => Clase, (clase) => clase.estudiante)
  @JoinColumn({ name: 'fk_estudiante' })
  estudiante: Estudiante;
}
