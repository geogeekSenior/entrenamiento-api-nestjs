import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Encuesta {
  @PrimaryGeneratedColumn()
  pk_encuesta: number;
  @Column({ type: 'nvarchar' })
  respuesta: string;
  @Column({ type: 'date' })
  fecha: Date;
  fk_pregunta: number;
  fk_grupo: number;
  fk_estudiante: number;
}
