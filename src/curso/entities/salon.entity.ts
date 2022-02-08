import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Grupo } from './grupo.entity';
import { Ubicacion } from './ubicacion.entity';

@Entity()
export class Salon {
  @PrimaryGeneratedColumn()
  pk_salon: number;
  @Column({ type: 'nvarchar', length: 100 })
  nombre: string;
  @Column({ type: 'nvarchar', length: 80 })
  lugar: string;
  @Column({ type: 'nvarchar', length: 100 })
  direccion: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado: string;
  @Column({ type: 'int' })
  capacidad: number;

  @OneToMany(() => Ubicacion, (ubicacion) => ubicacion.salones)
  @JoinColumn({ name: 'fk_ubicacion' })
  ubicacion: Ubicacion;

  @OneToMany(() => Grupo, (grupo) => grupo.curso)
  grupos: Grupo[];
}
