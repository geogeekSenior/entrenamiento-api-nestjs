import { Instructor } from 'src/usuario/entities/instructor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Curso } from './curso.entity';
import { Horario } from './horario.entity';
import { Salon } from './salon.entity';

@Entity()
export class Grupo {
  @PrimaryGeneratedColumn()
  pk_grupo: number;
  @Column({ type: 'date' })
  fecha_inicio: Date;
  @Column({ type: 'date' })
  fecha_fin: Date;
  @Column({ type: 'nvarchar', length: 50 })
  tipo: string;
  @Column({ type: 'nvarchar', length: 50 })
  alcance: string;
  @Column({ type: 'bit' })
  entrega_modificada: boolean;
  @Column({ type: 'nvarchar' })
  informe: string;

  @ManyToOne(() => Curso, (curso) => curso.grupos)
  @JoinColumn({ name: 'fk_curso' })
  curso: Curso;

  @ManyToOne(() => Salon, (salon) => salon.grupos)
  @JoinColumn({ name: 'fk_salon' })
  salon: Salon;

  @ManyToOne(() => Instructor, (instructor) => instructor.grupos)
  @JoinColumn({ name: 'fk_instructor' })
  instructor: Instructor;

  @OneToMany(() => Horario, (horario) => horario.grupos)
  horario: Horario;
}
