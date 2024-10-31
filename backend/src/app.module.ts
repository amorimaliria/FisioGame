import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { memoryStorage } from 'multer';

import { UsersModule } from './resources/users/users.module';
import { PerguntasModule } from './resources/perguntas/perguntas.module';
import { TurmasModule } from './resources/turmas/turmas.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './services/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    DatabaseModule,
    UsersModule,
    PerguntasModule,
    TurmasModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/api',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
