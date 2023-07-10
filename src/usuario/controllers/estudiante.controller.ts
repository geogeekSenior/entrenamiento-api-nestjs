import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateEstudianteDto,
  UpdateEstudianteDto,
} from '../dtos/estudiante.dto';
import { EstudianteService } from '../services/estudiante.service';
import { View_Clases_Estudiantes } from '../views/clases_estudiantes.view';

@ApiTags('Estudiante')
@Controller('estudiante')
export class EstudianteController {
  constructor(private estudianteService: EstudianteService) {}

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':user')
  findOneByUser(@Param('user') user: string) {
    console.log(user);
    return this.estudianteService.findOneByUser(user);
  }

  @Get('clases/:doc')
  findLessonsById(@Param('doc') documento: string) {
    return this.estudianteService.findLessonsByDoc(documento);
  }

  @Get('certificado/:doc/:grupo_id')
  findDataCertificateById(
    @Param('doc') documento: string,
    @Param('grupo_id', ParseIntPipe) grupo_id: number,
  ) {
    return this.estudianteService.findDataCertificateByDoc(documento, grupo_id);
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
