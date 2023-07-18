import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    /* São os parâmetros de conexão necessários para que a conexão
    com o banco de dados seja realizada. */
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'menugoutmet',
      // faz o carregamento automático das entidades
      autoLoadEntities: true,
      /* cria as tabelas no banco de dados automaticamente
      de acordo com o que for definido nas etidades */
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
