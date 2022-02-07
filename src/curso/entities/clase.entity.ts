import { Estudiante } from 'src/usuario/entities/estudiante.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Clase {
  pfk_grupo: number;
  @ManyToOne(() => Estudiante, (estudiante) => estudiante.clase)
  estudiantes: Estudiante[];
  @Column({ type: 'nvarchar', length: 50 })
  estado_encuesta: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado_material: string;
  @Column({ type: 'nvarchar', length: 50 })
  estado_certificado: string;
  @Column({ type: 'nvarchar', length: 50 })
  orden_venta: string;
  @Column({ type: 'nvarchar', length: 50 })
  pais_orden_venta: string;
  @Column({ type: 'numeric', length: 5 })
  calificacion: string;
  @Column({ type: 'date' })
  fecha: Date;
  fk_empresa: number;
}
