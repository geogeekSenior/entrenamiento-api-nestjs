import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Salon } from './salon.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  pk_ubicacion: number;

  @Column({ type: 'nvarchar', length: 50 })
  nombre: string;

  @OneToOne(() => Ubicacion, (ubicacion) => ubicacion.pais)
  @JoinColumn({ name: 'fk_pais' })
  pais: Ubicacion;

  @ManyToOne(() => Salon, (salon) => salon.ubicacion)
  ubicaciones: Ubicacion[];

  @OneToMany(() => Salon, (salon) => salon.ubicacion)
  salones: Salon[];
}
