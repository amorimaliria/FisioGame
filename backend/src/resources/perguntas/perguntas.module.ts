import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerguntasService } from './perguntas.service';
import { PerguntasController } from './perguntas.controller';
import { Perguntas } from './entities/perguntas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Perguntas])],
  providers: [PerguntasService],
  controllers: [PerguntasController],
  exports: [PerguntasService],
})
export class PerguntasModule {}
