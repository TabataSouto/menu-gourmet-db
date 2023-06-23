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
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'menu',
      // faz o carregamento automático das entidades
      autoLoadEntities: true,
      /* cria as tabelas no banco de dados automaticamente
      de acordo com o que for definido nas etidades */
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
