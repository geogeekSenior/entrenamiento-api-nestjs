import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Certificado } from '../entities/certificado.entity';

@Injectable()
export class CertificadoService {
    constructor(
        @InjectRepository(Certificado)
        private certificadoRepo: Repository<Certificado>,
    ) { }

    async validateCertificate(fk_estudiante: number, fk_grupo: number) {
        try {
            console.log(fk_estudiante, fk_grupo)
            const certificado = await this.certificadoRepo.find({
                select: ["pk_certificado", "fecha"],
                where: { estudiante: fk_estudiante, grupo: fk_grupo }
            })
            console.log(certificado)
            return certificado;
        } catch (error) {
            console.log(error)
        }
    }
}
