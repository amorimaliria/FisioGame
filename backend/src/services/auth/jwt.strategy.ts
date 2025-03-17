import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../../common/types/jwt-payload.type';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../resources/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { id, email } = payload;
    const user = await this.userRepository.findOne({ where: { id, email } });

    if (!user) {
      throw new UnauthorizedException('Token inválido');
    }

    return user;
  }
}
