import { Controller, Get, Param } from '@nestjs/common';
import { CursoService } from '../services/curso.service';

@Controller('curso')
export class CursoController {
    constructor(private cursoService: CursoService) { }

    @Get('material/:sigla')
    getMaterialByCourse(@Param('sigla') sigla: string) {
        return this.cursoService.getMaterialByCourse(sigla)
    }
}
