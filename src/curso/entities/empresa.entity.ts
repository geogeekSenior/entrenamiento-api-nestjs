import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Clase } from './clase.entity';
import { Sector } from './sector.entity';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  pk_empresa: number;
  @Column({ type: 'nvarchar', length: 100 })
  nombre: string;
  @Column({ type: 'nvarchar', length: 20 })
  nit: string;
  @Column({ type: 'nvarchar', length: 50 })
  pais: string;
  @Column({ type: 'int' })
  customer_number: number;

  @ManyToOne(() => Sector, (sector) => sector.empresas)
  @JoinColumn({ name: 'fk_sector' })
  sector: Sector;

  @OneToMany(() => Clase, (clase) => clase.empresa)
  clases: Clase[];
}
