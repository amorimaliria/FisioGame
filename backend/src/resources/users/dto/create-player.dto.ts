import { IsOptional, Min } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreatePlayerDto extends CreateUserDto {
  @IsOptional()
  @Min(0)
  pontuacao?: number;
}
