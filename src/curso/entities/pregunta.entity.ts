import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Encuesta } from './encuesta.entity';

@Entity()
export class Pregunta {
  @PrimaryGeneratedColumn()
  pk_pregunta: number;
  @Column({ type: 'nvarchar', length: 500 })
  pregunta: string;
  @Column({ type: 'nvarchar', length: 50 })
  categoria: string;
  @Column({ type: 'nvarchar', length: 50 })
  tipo: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado: string;
  @Column({ type: 'int' })
  orden: number;

  @OneToMany(() => Encuesta, (encuesta) => encuesta.pregunta)
  encuestas: Encuesta[];
}
