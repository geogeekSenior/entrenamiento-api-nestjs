import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  fk_grupo: number;
}
