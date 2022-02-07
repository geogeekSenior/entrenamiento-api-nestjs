import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupo } from './grupo.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  pk_curso: number;
  @Column({ type: 'nvarchar', length: 50 })
  sigla: number;
  @Column({ type: 'nvarchar', length: 100 })
  nombre: string;
  @Column({ type: 'int' })
  intensidad: number;
  @Column({ type: 'nvarchar', length: 50 })
  estado: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado_material: string;
  @Column({ type: 'date' })
  fecha_lanzamiento: Date;
  @Column({ type: 'nvarchar', length: 50 })
  tipo: string;
  @Column({ type: 'nvarchar', length: 50 })
  idioma: string;
  @Column({ type: 'nvarchar', length: 50 })
  organizacion: string;
  @Column({ type: 'nvarchar', length: 50 })
  acronimo: string;
  @Column({ type: 'nvarchar', length: 50 })
  ver_plataforma: string;
  @Column({ type: 'nvarchar', length: 50 })
  ver_material: string;
  @Column({ type: 'nvarchar', length: 100 })
  categoria: string;

  @OneToMany(() => Grupo, (grupo) => grupo.curso)
  grupos: Grupo[];
}
