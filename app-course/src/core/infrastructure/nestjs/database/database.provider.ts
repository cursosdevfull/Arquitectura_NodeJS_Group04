import { DataSource } from 'typeorm';

import { CourseEntity } from '../../../../modules/course/infrastructure/entities/course.entity';
import { RoleEntity } from '../../../../modules/role/infrastructure/entities/role.entity';
import { ScheduleEntity } from '../../../../modules/schedule/infrastructure/entities/schedule.entity';
import { UserEntity } from '../../../../modules/user/infrastructure/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE_MYSQL',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3310,
        username: 'shidalgo',
        password: '12345',
        database: 'db',
        entities: [UserEntity, RoleEntity, CourseEntity, ScheduleEntity],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'DATA_SOURCE_MONGO',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: 'mongodb://root:12345@localhost/db?retryWrites=true&w=majority&authSource=admin',
        synchronize: true,
        logging: false,
        entities: [],
        migrations: [],
        subscribers: [],
      });

      return dataSource.initialize();
    },
  },
];
