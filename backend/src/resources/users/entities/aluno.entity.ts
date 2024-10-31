import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../../database/abstract.entity';
import { Turma } from '../../turmas/entities/turma.entity';
@Entity()
export class Aluno extends AbstractEntity<Aluno> {
  @Column({ unique: true })
  matricula: string;

  @Column()
  nome: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Turma, (turma) => turma.alunos)
  @JoinColumn()
  turma: Turma;
}
