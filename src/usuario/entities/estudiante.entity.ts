import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Clase } from '../../curso/entities/clase.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  pk_estudiante: number;
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
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  num_contacto: string;
  @Column({ type: 'bit', default: 1 })
  registrado: boolean;

  @OneToMany(() => Clase, (clase) => clase.estudiante)
  clases: Clase[];
}
