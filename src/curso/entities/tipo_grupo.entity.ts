import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupo } from './grupo.entity';

@Entity()
export class Tipo_Grupo {
  @PrimaryGeneratedColumn()
  pk_tipo_grupo: number;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;

  @OneToMany(() => Grupo, (grupo) => grupo.tipo)
  grupos: Grupo[];
}
