import { UserEntity } from '../entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
  {
    provide: 'USER_MANAGER',
    useFactory: (dataSource) => dataSource.manager,
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
