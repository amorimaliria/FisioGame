import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard utilizado para configurar uma rota como de login obrigatório a partir do AuthGuard da biblioteca `passport`
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
