import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CertificadoService } from '../services/certificado.service';

@ApiTags('Certificados')
@Controller('certificado')
export class CertificadoController {
  constructor(private certificadoServices: CertificadoService) {}

  @Get('id/:fk_estudiante/:fk_grupo')
  validateCertificate(
    @Param('fk_estudiante', ParseIntPipe) fk_estudiante: number,
    @Param('fk_grupo', ParseIntPipe) fk_grupo: number,
  ) {
    return this.certificadoServices.validateCertificate(
      fk_estudiante,
      fk_grupo,
    );
  }
}
