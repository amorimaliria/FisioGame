import { Entity, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../../database/abstract.entity';
import { Assunto } from '../entities
import { Length } from 'class-validator';

/**
 * Representa uma Pergunta associada a um Assunto.
 */
@Entity()
export class Pergunta extends AbstractEntity<Pergunta> {
  @Column()
  @Length(5, 500)
  enunciado: string;

  @Column({ type: 'simple-array' })
  opcoes: string[];

  @Column()
  @Length(1, 255)
  respostaCorreta: string;

  @ManyToOne(() => Assunto, (assunto) => assunto.perguntas, {
    onDelete: 'CASCADE',
  })
  assunto: Assunto;
}
