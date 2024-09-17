import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Perguntas } from './entities/perguntas.entity';

@Injectable()
export class PerguntasService {
  constructor(
    @InjectRepository(Perguntas)
    private perguntasRepository: Repository<Perguntas>,
  ) {}

  create(pergunta: Partial<Perguntas>): Promise<Perguntas> {
    const newQuestion = this.perguntasRepository.create(pergunta);
    return this.perguntasRepository.save(newQuestion);
  }

  findAll(): Promise<Perguntas[]> {
    return this.perguntasRepository.find();
  }

  findOne(id: number): Promise<Perguntas> {
    return this.perguntasRepository.findOneBy({ id });
  }
}
