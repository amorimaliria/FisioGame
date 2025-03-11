import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';
import { Pergunta } from '../perguntas/pergunta.entity';
import { Length } from 'class-validator';

/**
 * Representa um Assunto que agrupa várias Perguntas.
 */
@Entity()
export class Assunto extends AbstractEntity<Assunto> {
  @Column({ unique: true })
  @Length(3, 100)
  titulo: string;

  @Column({ nullable: true })
  @Length(0, 255)
  descricao?: string;

  @OneToMany(() => Pergunta, (pergunta) => pergunta.assunto)
  perguntas: Pergunta[];
}
