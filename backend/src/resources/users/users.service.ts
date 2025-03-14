import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { Gestor } from './entities/gestor.entity';
import { Player } from './entities/player.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateGestorDto } from './dto/update-gestor.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
    @InjectRepository(Gestor)
    private readonly gestorsRepository: Repository<Gestor>,
    private readonly entityGestorManager: EntityManager,
    @InjectRepository(Player)
    private readonly playersRepository: Repository<Player>,
  ) {}

  async createGestor(createUserDto: CreateUserDto) {
    const gestor = new Gestor(createUserDto);
    await this.entityGestorManager.save(gestor);
    return gestor;
  }

  async createPlayer(createUserDto: CreateUserDto) {
    const player = new Player(createUserDto);
    await this.playersRepository.save(player);
    return player;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async updateGestor(
    id: number,
    updateGestorDto: UpdateGestorDto,
  ): Promise<User> {
    const gestor = await this.gestorsRepository.findOne({ where: { id } });
    if (!gestor) {
      throw new NotFoundException(`Gestor com ID ${id} não encontrado`);
    }
    Object.assign(gestor, updateGestorDto);
    await this.gestorsRepository.save(gestor);
    return gestor;
  }

  async updatePlayer(
    id: number,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<User> {
    const player = await this.playersRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException(`Player com ID ${id} não encontrado`);
    }
    Object.assign(player, updatePlayerDto);
    await this.playersRepository.save(player);
    return player;
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    await this.usersRepository.delete(id);
  }
}
