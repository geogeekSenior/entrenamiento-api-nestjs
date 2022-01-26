import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  fk_sector: number;
}
