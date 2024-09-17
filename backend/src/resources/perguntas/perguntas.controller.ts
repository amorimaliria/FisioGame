import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PerguntasService } from './perguntas.service';
import { Perguntas } from './entities/perguntas.entity';

@Controller('perguntas')
export class PerguntasController {
  constructor(private readonly PerguntasService: PerguntasService) {}

  @Post()
  create(@Body() PerguntasData: Partial<Perguntas>): Promise<Perguntas> {
    return this.PerguntasService.create(PerguntasData);
  }

  @Get()
  findAll(): Promise<Perguntas[]> {
    return this.PerguntasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Perguntas> {
    return this.PerguntasService.findOne(+id);
  }
}
