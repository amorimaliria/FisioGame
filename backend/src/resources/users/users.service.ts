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
    private readonly gestorRepository: Repository<Gestor>,
    private readonly entityGestorManager: EntityManager,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = new User(createUserDto);
    await this.entityManager.save(user);
    return user;
  }
  async createGestor(createUserDto: CreateUserDto) {
    const gestor = new Gestor(createUserDto);
    await this.entityGestorManager.save(gestor);
    return gestor;
  }

  async createPlayer(createUserDto: CreateUserDto) {
    const player = new Player(createUserDto);
    await this.playerRepository.save(player);
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
    const gestor = await this.gestorRepository.findOne({ where: { id } });
    if (!gestor) {
      throw new NotFoundException(`Gestor com ID ${id} não encontrado`);
    }
    Object.assign(gestor, updateGestorDto);
    await this.gestorRepository.save(gestor);
    return gestor;
  }

  async updatePlayer(
    id: number,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<User> {
    const player = await this.playerRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException(`Player com ID ${id} não encontrado`);
    }
    Object.assign(player, updatePlayerDto);
    await this.playerRepository.save(player);
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
