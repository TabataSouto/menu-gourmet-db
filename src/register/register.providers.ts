import { DataSource } from 'typeorm';
import { Register } from './entities/register.entity';

export const repository_register = 'REGISTER_REPOSITORY';

export const registerProviders = [
  {
    provide: repository_register,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Register),
    inject: ['DATA_SOURCE'],
  },
];
