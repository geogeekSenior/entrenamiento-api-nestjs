import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  fk_ubicacion: number;
}
