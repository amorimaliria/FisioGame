import { PartialType } from '@nestjs/mapped-types';
import { CreateGestorDto } from './create-gestor.dto';
import { IsOptional, Length } from 'class-validator';

export class UpdateGestorDto extends PartialType(CreateGestorDto) {
  @IsOptional()
  @Length(2, 100)
  curso?: string;

  @IsOptional()
  @Length(2, 100)
  formacao?: string;

  @IsOptional()
  @Length(2, 50)
  titulacao?: string;
}
