import { RoleEntity } from '../entities/role.entity';

export const roleProviders = [
  {
    provide: 'ROLE_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(RoleEntity),
    inject: ['DATA_SOURCE_MYSQL'],
  },
  {
    provide: 'ROLE_MANAGER',
    useFactory: (dataSource) => dataSource.manager,
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
