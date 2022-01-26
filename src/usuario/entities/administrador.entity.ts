import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  pk_administrador: number;
  @Column({ type: 'nvarchar', length: 50 })
  nombre: string;
  @Column({ type: 'nvarchar', length: 50 })
  apellido: string;
  @Column({ type: 'nvarchar', length: 100 })
  correo: string;
  @Column({ type: 'nvarchar', length: 50 })
  usuario: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado: string;
}
