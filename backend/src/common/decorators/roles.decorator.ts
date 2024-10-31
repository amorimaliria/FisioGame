import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';

import { ROLES_KEY } from '../constants/roles.constant';
import { RolesGuard } from '../guards/roles.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

/**
 * Decorator utilizado como um atalho para configurar uma rota como de login obrigatório e, ao mesmo tempo, determinador
 * que apenas um conjunto de tipos de usuário pode acessar uma rota. Ex: rota que só pode ser acessada por Professor
 * Gestor, \@Roles('Professor', 'Gestor')
 */
export const Roles = (...roles: string[]) => {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(JwtAuthGuard, RolesGuard),
  );
};
