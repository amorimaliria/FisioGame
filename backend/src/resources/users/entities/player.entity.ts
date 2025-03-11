import { ChildEntity, Column } from 'typeorm';
import { User } from './user.entity';

/**
 * Entidade que representa um jogador do quiz.
 * O player acumula pontuação de acordo com seu desempenho no jogo.
 */
@ChildEntity()
export class Player extends User {
  @Column({ default: 0 })
  pontuacao: number;
}
