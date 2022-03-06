import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { ClaseService } from '../services/clase.service';

@Controller('clase')
export class ClaseController {
    constructor(private claseService: ClaseService) { }

    @Get('state/:pk_estudiante/:pk_grupo')
    getStateDateSurvey(@Param('pk_estudiante',ParseIntPipe) pk_estudiante: number, @Param('pk_grupo',ParseIntPipe) pk_grupo: number) {
        return this.claseService.getStateDateSurvey(pk_estudiante, pk_grupo);
    }
}
