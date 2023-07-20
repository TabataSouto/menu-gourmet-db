import { DataSource } from 'typeorm';
import { Register } from './entities/register.entity';

export const registerProviders = [
  {
    provide: 'REGISTER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Register),
    inject: ['DATA_SOURCE'],
  },
];
