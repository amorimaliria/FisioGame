import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { User } from './entities/user.entity';
import { Professor } from './entities/professor.entity';
import { Aluno } from './entities/aluno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Professor, Aluno])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
