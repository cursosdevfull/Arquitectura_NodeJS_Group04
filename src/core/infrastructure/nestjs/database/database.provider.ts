import { DataSource } from 'typeorm';

import { AppService } from '../../../../app.service';
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
        host: AppService.db_host,
        port: AppService.db_port,
        username: AppService.db_username,
        password: AppService.db_password,
        database: AppService.db_database,
        entities: [UserEntity, RoleEntity, CourseEntity, ScheduleEntity],
        synchronize: true,
        logging: false,
      });

      return dataSource.initialize();
    },
  },
  // {
  //   provide: 'DATA_SOURCE_MONGO',
  //   useFactory: async () => {
  //     const dataSource = new DataSource({
  //       type: 'mongodb',
  //       url: `mongodb://${AppService.mongo_username}:${AppService.mongo_password}@${AppService.mongo_host}/db?retryWrites=true&w=majority&authSource=admin`,
  //       synchronize: true,
  //       logging: false,
  //       entities: [],
  //       migrations: [],
  //       subscribers: [],
  //     });

  //     return dataSource.initialize();
  //   },
  // },
];
