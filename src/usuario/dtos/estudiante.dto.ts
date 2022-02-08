import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly apellido: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly doc_identidad: string;

    @IsString()
    @ApiProperty()
    readonly usuario: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly correo: string;

    @IsString()
    @ApiProperty()
    readonly num_contacto: string;

    IsBoolean()
    IsNotEmpty()
    @ApiProperty()
    readonly registrado: boolean;
}


export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) { }