import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Estudiante } from 'src/usuario/entities/estudiante.entity';
import { Empresa } from './empresa.entity';
import { Grupo } from './grupo.entity';

@Entity()
export class Clase {
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

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.clases)
  @JoinColumn({ name: 'pfk_estudiante' })
  estudiante: Estudiante;

  @ManyToOne(() => Grupo, (grupo) => grupo.clases)
  @JoinColumn({ name: 'pfk_grupo' })
  grupo: Grupo;

  @ManyToOne(() => Empresa, (empresa) => empresa.clases)
  @JoinColumn({ name: 'fk_empresa' })
  empresa: Empresa;
}
