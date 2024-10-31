import { Column, Entity, ManyToMany, OneToMany, JoinTable } from 'typeorm';

import { AbstractEntity } from '../../../database/abstract.entity';
import { Aluno } from 'src/resources/users/entities/aluno.entity';
import { Professor } from 'src/resources/users/entities/professor.entity';

@Entity()
export class Turma extends AbstractEntity<Turma> {
  @Column({ unique: true })
  codigo: string;

  @Column()
  descricao: string;

  @Column()
  periodo: number;

  @Column()
  anoLetivo: number;

  @ManyToMany(() => Professor)
  @JoinTable()
  professores: Professor[];

  /** TODO: Implementar relacionamento com a instituição
   * 
   * @ManyToOne(() => Instituicao, (instituicao) => instituicao.turmas)
  @JoinColumn()
  instituicao: Instituicao;
  */

  @OneToMany(() => Aluno, (aluno) => aluno.turma)
  alunos: Aluno[];

  get nome() {
    return `${this.descricao} ${this.anoLetivo}.${this.periodo}`;
  }
}
