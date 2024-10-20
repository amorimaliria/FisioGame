import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';

@Entity()
export class Turma extends AbstractEntity<Turma> {
  @Column({ unique: true })
  codigo: string;

  @Column()
  turno: Turno;

  @Column()
  letra: Letra;

  @Column()
  anoOcorrencia: number;

  @Column()
  anoLetivo: AnoLetivo;

  @ManyToMany(() => Professor)
  @JoinTable()
  professores: Professor[];

  @ManyToOne(() => Escola, (escola) => escola.turmas)
  @JoinColumn()
  escola: Escola;

  @OneToMany(() => Aluno, (aluno) => aluno.turma)
  alunos: Aluno[];

  @OneToMany(() => TestePlanejado, (testePlanejado) => testePlanejado.turma)
  testesPlanejados: TestePlanejado[];

  get nome() {
    return `${this.anoLetivo} ${this.letra}, ${this.anoOcorrencia}`;
  }
}