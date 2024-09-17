import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Perguntas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column('simple-array')
  alternativas: string[];

  @Column()
  resposta: string;

  @Column()
  nivel: string; // 'easy', 'medium', 'hard'
}
