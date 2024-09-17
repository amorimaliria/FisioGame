import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Professor } from './entities/professor.entity';
import { Aluno } from './entities/aluno.entity';
import { Perguntas } from '../perguntas/entities/perguntas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Professor, Aluno, Perguntas])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
