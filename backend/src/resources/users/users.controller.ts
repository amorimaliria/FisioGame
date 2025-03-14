import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateGestorDto } from './dto/update-gestor.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/gestor')
  async createGestor(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createGestor(createUserDto);
  }

  @Post('/player')
  async createPlayer(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createPlayer(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  @Patch('/gestor/:id')
  async updateGestor(
    @Param('id') id: number,
    @Body() updateGestorDto: UpdateGestorDto,
  ): Promise<User> {
    return this.usersService.updateGestor(id, updateGestorDto);
  }

  @Patch('/player/:id')
  async updatePlayer(
    @Param('id') id: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<User> {
    return this.usersService.updatePlayer(id, updatePlayerDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
