import { Controller, Get, Param } from '@nestjs/common';
import { PreguntaService } from '../services/pregunta.service';

@Controller('pregunta')
export class PreguntaController {
    constructor(private preguntaService: PreguntaService) {}

    
  @Get()
  findAll(){
    return this.preguntaService.findAll();
  }
  
  @Get(':category')
  findAllByCategory(@Param('category') categoria: string) {
    return this.preguntaService.findAllByCategory(categoria);
  }
}
