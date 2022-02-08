import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateEstudianteDto,
  UpdateEstudianteDto,
} from '../dtos/estudiante.dto';
import { EstudianteService } from '../services/estudiante.service';

@Controller('estudiante')
export class EstudianteController {
  constructor(private estudianteService: EstudianteService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.estudianteService.findOne(id);
  }

  @Get(':user')
  findOneByUser(@Param('user') user: string) {
    return this.estudianteService.findOneByUser(user);
  }

  @Post()
  create(@Body() payload: CreateEstudianteDto) {
    console.log(payload);
    return this.estudianteService.create(payload);
  }

  @Put(':id')
  update(@Param(':id') id: number, @Body() payload: UpdateEstudianteDto) {
    return this.estudianteService.update(id, payload);
  }
}
