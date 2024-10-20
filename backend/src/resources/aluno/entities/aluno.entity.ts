import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../../database/abstract.entity';
@Entity()
export class Aluno extends AbstractEntity<Aluno> {
  @Column({ unique: true })
  matricula: string;

  @Column()
  nome: string;

  @Column()
  genero: Genero;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Turma, (turma) => turma.alunos)
  @JoinColumn()
  turma: Turma;

  @OneToMany(() => AplicacaoTeste, (aplicacaoTeste) => aplicacaoTeste.aluno)
  aplicacoesTeste: AplicacaoTeste[];
}
