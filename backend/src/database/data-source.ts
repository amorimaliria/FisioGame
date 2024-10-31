import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

import { Perguntas } from '../resources/perguntas/entities/perguntas.entity';
import { Professor } from '../resources/users/entities/professor.entity';
import { Aluno } from '../resources/users/entities/aluno.entity';
import { User } from '../resources/users/entities/user.entity';

config(); // Carrega as variáveis de ambiente do .env

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [Perguntas, Aluno, User, Professor],
  ssl: ['production', 'staging'].includes(configService.getOrThrow('NODE_ENV')),
  migrations: ['migrations/**'],
};

export const AppDataSource = new DataSource(dataSourceOptions);
