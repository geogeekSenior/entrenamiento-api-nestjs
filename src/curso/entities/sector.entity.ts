import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  pk_sector: number;
  @Column({ type: 'nvarchar', length: 100 })
  nombre: string;
}
