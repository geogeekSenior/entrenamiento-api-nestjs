import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Empresa } from './empresa.entity';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  pk_sector: number;
  @Column({ type: 'nvarchar', length: 100 })
  nombre: string;

  @OneToMany(() => Empresa, (empresa) => empresa.sector)
  empresas: Empresa[];
}
