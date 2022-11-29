import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Certificado } from '../entities/certificado.entity';

@Injectable()
export class CertificadoService {
  constructor(
    @InjectRepository(Certificado)
    private certificadoRepo: Repository<Certificado>,
  ) {}

  async validateCertificate(fk_estudiante: number, fk_grupo: number) {
    try {
      console.log(fk_estudiante, fk_grupo);
      const certificado = await this.certificadoRepo.findOne({
        select: ['pk_certificado', 'fecha'],
        relations: ['estudiante', 'grupo'],
        where: {
          estudiante: { pk_estudiante: fk_estudiante },
          grupo: { pk_grupo: fk_grupo },
        },
      });
      console.log(certificado);
      return certificado;
    } catch (error) {
      console.log(error);
    }
  }
}
