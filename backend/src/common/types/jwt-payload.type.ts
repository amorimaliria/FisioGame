import { Escola } from '../../resources/escolas/entities/escola.entity';

export type JwtPayload = {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  type: string;
  escola?: Escola;
};
