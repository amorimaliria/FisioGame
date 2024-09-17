import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './resources/users/users.module';
import { ProfessorModule } from './resources/professor/professor.module';
import { ProfessorService } from './resources/professor/professor.service';
import { AlunoController } from './resources/aluno/aluno.controller';
import { AlunoService } from './resources/aluno/aluno.service';
import { ProfessorController } from './resources/professor/professor.controller';
import { AlunoModule } from './resources/aluno/aluno.module';
import { PerguntasModule } from './resources/perguntas/perguntas.module';
import { PerguntasService } from './resources/perguntas/perguntas.service';
import { PerguntasController } from './resources/perguntas/perguntas.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'fisioGameApp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    ProfessorModule,
    AlunoModule,
    PerguntasModule,
  ],
  providers: [ProfessorService, AlunoService, PerguntasService],
  controllers: [ProfessorController, AlunoController, PerguntasController],
})
export class AppModule {}
