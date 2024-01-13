import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';

import { DatabaseModule } from '../../../core/infrastructure/nestjs/database/database.module';
import { User } from '../domain/roots/user';
import { UserController } from '../infrastructure/presentation/user.controller';
import { userProviders } from '../infrastructure/providers/user.provider';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { UserCreate } from './user-create';
import { UserGetOne } from './user-get-one';
import { UserList } from './user-list';

let mod: any;
let userCreate: UserCreate;
let userController: UserController;
let userList: UserList;
let userGetOne: UserGetOne;
let userInfrastructure: UserInfrastructure;

describe('User List', () => {
  beforeEach(async () => {
    mod = await Test.createTestingModule({
      imports: [DatabaseModule, ConfigModule.forRoot()],
      controllers: [UserController],
      providers: [
        ...userProviders,
        UserCreate,
        UserList,
        UserGetOne,
        UserInfrastructure,
      ],
    }).compile();

    userCreate = mod.get(UserCreate);
    userController = mod.get(UserController);
    userList = mod.get(UserList);
    userGetOne = mod.get(UserGetOne);
    userInfrastructure = mod.get(UserInfrastructure);
  });

  it('List users', async () => {
    const request = {
      id: 'ef310faa-7bed-480f-9cdc-36995e907dcc',
      fullname: 'Sergio Hidalgo',
      email: 'sergio2@email.com',
      image: 'foto.jpg',
      password: 'Mundo12345',
      roles: [
        { id: '287e84a5-698d-4f6c-b5bf-4d2c0e4daa52', name: 'ADMIN' },
        { id: 'cfd51374-d308-46ed-b656-d2257337c69a', name: 'TEACHER' },
      ],
      address: {
        street: 'Rua 1',
        number: 123,
        city: 'Bogotá',
        country: 'Colombia',
      },
    };

    const user = new User(request);

    // (UserInfrastructure as jest.Mock).mockReturnValue({
    //     list: jest.fn(),
    // })

    jest
      .spyOn(userInfrastructure, 'list')
      .mockImplementation(async () => [user]);

    const result = await userList.execute();

    expect(result).toEqual([request]);
    expect(result[0].fullname).toBe('Sergio Hidalgo');
    expect(userInfrastructure.list).toHaveBeenCalled();
    expect(userInfrastructure.list).toHaveBeenCalledTimes(1);
  });
});
