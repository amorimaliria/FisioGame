import {
  Entity,
  Column,
  TableInheritance,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

import { AbstractEntity } from '../../../database/abstract.entity';
import { IsEmail, Length, validateOrReject } from 'class-validator';

/**
 * Entidade básica que armazena os usuários do sistema. Não é utilizada diretamente, mas serve como herança para os
 * possíveis tipos de usuário
 */
@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User extends AbstractEntity<User> {
  @Column()
  @Length(3, 30)
  nome: string;

  @Column()
  @Length(3, 50)
  sobrenome: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  type: string;

  @Column({ select: false, nullable: true })
  passwordHash: string;

  @Column({ nullable: true })
  passwordResetToken?: string;

  // Campo virtual, não armazenado
  password?: string;

  passwordConfirmation?: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    await validateOrReject(this);
    if (this.password) {
      if (this.password !== this.passwordConfirmation) {
        throw new Error('Senha e Confirmação de Senha imcompatíveis');
      }
      if (this.password.length < 6) {
        throw new Error('Senha deve ter no mínimo 6 caracteres');
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
