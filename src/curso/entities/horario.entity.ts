import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Grupo } from './grupo.entity';

@Entity()
export class Horario {
  @PrimaryGeneratedColumn()
  pk_horario: number;
  @Column({ type: 'date' })
  fecha: Date;
  @Column({ type: 'time' })
  hora_inicio: Date;
  @Column({ type: 'time' })
  hora_fin: Date;

  @ManyToOne(() => Grupo, (grupo) => grupo.horario)
  @JoinColumn({ name: 'fk_grupo' })
  grupos: Grupo[];
}
