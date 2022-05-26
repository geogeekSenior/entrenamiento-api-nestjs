import { Body, Controller, Post } from '@nestjs/common';
import { CreateEncuestaDto } from '../dtos/encuesta.dto';
import { EncuestaService } from '../services/encuesta.service';

@Controller('encuesta')
export class EncuestaController {
    constructor(private encuestaService: EncuestaService) { }

    @Post()
    saveSurvey(@Body() payload: CreateEncuestaDto[]) {
        return this.encuestaService.saveSurvey(payload)
    }

}
