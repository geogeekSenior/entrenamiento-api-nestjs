import { Clase } from 'src/curso/entities/clase.entity';
import { Empresa } from 'src/curso/entities/empresa.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ type: 'nvarchar', length: 50 })
  num_contacto: string;
  @Column({ type: 'bit', length: 50 })
  registrado: boolean;

  @OneToMany(() => Clase, (clase) => clase.estudiantes)
  clase: Clase;
}
