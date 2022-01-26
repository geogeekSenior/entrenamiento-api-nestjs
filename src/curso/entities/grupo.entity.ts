import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  fk_salon: number;
  fk_instructor: number;
}
