import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateGestorDto extends CreateUserDto {
  @IsNotEmpty()
  @Length(2, 100)
  curso: string;

  @IsNotEmpty()
  @Length(2, 100)
  formacao: string;

  @IsOptional()
  @Length(2, 50)
  titulacao?: string;
}
