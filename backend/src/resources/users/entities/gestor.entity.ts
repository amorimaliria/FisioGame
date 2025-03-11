import { ChildEntity, Column } from 'typeorm';
import { User } from './user.entity';

/**
 * Entidade que representa o gestor da aplicação.
 * O gestor pode criar novos assuntos e adicionar perguntas ao banco de dados.
 */
@ChildEntity()
export class Gestor extends User {
  @Column()
  curso: string;

  @Column()
  formacao: string;

  @Column({ nullable: true })
  titulacao?: string;
}
