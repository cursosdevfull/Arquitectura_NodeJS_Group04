import { DataSource } from 'typeorm';

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
        entities: [],
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
        host: 'localhost',
        port: 27017,
        username: 'root',
        password: '12345',
        database: 'db',
        entities: [],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
