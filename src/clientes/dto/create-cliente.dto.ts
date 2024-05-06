import { IsDate, isDate, IsInt, IsOptional, IsString, MaxLength, MinDate, MinLength } from "class-validator"

export class CreateClienteDto {
    @IsString()
    @MinLength(5,{

    })
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
    @IsDate()
    @IsOptional()
    @MinDate(new Date("01/01/1900"))
    fechaNacimiento?: Date
    @IsOptional()
    @IsInt()
    profesionId: number
    @IsOptional()
    @IsInt()
    tipoiviendaId: number
    @IsOptional()
    @IsInt()
    generoId: number
    @IsOptional()
    @IsInt()
    tipoPersoneriaId: number
    @IsOptional()
    @IsInt()
    estadoCivilId: number
    @IsOptional()
    @IsInt()
    created_by: number
}
