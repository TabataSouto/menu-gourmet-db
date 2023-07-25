// eslint-disable-next-line @typescript-eslint/no-var-requires
import { DataSource } from 'typeorm';
import { CreateLoginTable1689852608284 } from './migrations/1689852608284-CreateLoginTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    // a factory quem vai criar as instâncias e a CLI não consegue pegar
    // a instância dessa forma ao rodar o comando migration:run
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.js'],
        // faz o carregamento automático das entidades
        /* cria as tabelas no banco de dados automaticamente
        de acordo com o que for definido nas etidades */
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  // faz o carregamento automático das entidades
  /* cria as tabelas no banco de dados automaticamente
  de acordo com o que for definido nas etidades */
  migrations: [CreateLoginTable1689852608284],
});
