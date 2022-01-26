import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  pk_instructor: number;
  @Column({ type: 'nvarchar', length: 20 })
  doc_identidad: string;
  @Column({ type: 'nvarchar', length: 50 })
  nombre: string;
  @Column({ type: 'nvarchar', length: 50 })
  apellido: string;
  @Column({ type: 'nvarchar', length: 100 })
  correo: string;
  @Column({ type: 'nvarchar', length: 60 })
  usuario: string;
  @Column({ type: 'nvarchar', length: 50 })
  num_contacto: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado: string;
  @Column({ type: 'nvarchar', length: 50 })
  titulo: string;
}
