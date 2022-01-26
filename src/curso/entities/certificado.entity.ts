import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Certificado {
  @PrimaryGeneratedColumn()
  pk_certificado: number;
  fk_grupo: number;
  fk_estudiante: number;
  @Column({ type: 'date' })
  fecha: Date;
}
