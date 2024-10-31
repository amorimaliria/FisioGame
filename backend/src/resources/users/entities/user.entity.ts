import {
  Entity,
  Column,
  TableInheritance,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

import { AbstractEntity } from '../../../database/abstract.entity';
import { IsEmail, Length } from 'class-validator';
@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User extends AbstractEntity<User> {
  @Column()
  @Length(30)
  nome: string;

  @Column()
  @Length(50)
  sobrenome: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  type: string;

  @Column({ select: false, nullable: true })
  passwordHash: string;

  // Campo virtual, não armazenado
  password?: string;

  passwordConfirmation?: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      if (this.password !== this.passwordConfirmation) {
        throw new Error('Senha e Confirmação de Senha imcompatíveis');
      }
      const salt = await bcrypt.genSalt();
      this.passwordHash = await bcrypt.hash(this.password, salt);
    }
  }

  async passwordIsValid(password: string): Promise<boolean> {
    if (!this.passwordHash) {
      throw new Error('Password hash is not set');
    }
    return bcrypt.compare(password, this.passwordHash);
  }
}
