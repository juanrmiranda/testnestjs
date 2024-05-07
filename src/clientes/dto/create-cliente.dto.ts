import { IsDateString, IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
export class CreateClienteDto {
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    nombres: string
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    apellidos: string
    @IsString()
    @MinLength(5)
    @MaxLength(200)
    razon_social?: string
    @IsDateString()
    @IsOptional()
    fechaNacimiento?: Date
    @IsOptional()
    @IsInt()
    profesion: number
    @IsOptional()
    @IsInt()
    tipo_vivienda: number
    @IsOptional()
    @IsInt()
    genero: number
    @IsOptional()
    @IsInt()
    tipoPersoneria: number
    @IsOptional()
    @IsInt()
    estadoCivil: number
    @IsOptional()
    @IsInt()
    created_by: number
}
