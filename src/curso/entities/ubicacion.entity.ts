import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  pk_ubicacion: number;
  @Column({ type: 'nvarchar', length: 50 })
  nombre: string;
  fk_pais: number;
}
