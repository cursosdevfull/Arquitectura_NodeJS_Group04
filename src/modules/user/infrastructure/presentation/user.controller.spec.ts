import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';

import { DatabaseModule } from '../../../../core/infrastructure/nestjs/database/database.module';
import { UserCreate } from '../../application/user-create';
import { UserGetOne } from '../../application/user-get-one';
import { UserList } from '../../application/user-list';
import { User } from '../../domain/roots/user';
import { userProviders } from '../providers/user.provider';
import { UserInfrastructure } from '../user.infrastructure';
import { UserResponse } from './dtos/responses/user-response.dto';
import { UserController } from './user.controller';

let mod: any;
let userCreate: UserCreate;
let userController: UserController;
let userList: UserList;
let userGetOne: UserGetOne;

describe('User Controller', () => {
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
  });

  it(
    'should create a new user',
    async () => {
      // Arrange
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

      jest
        .spyOn(userCreate, 'execute')
        .mockImplementation(() => Promise.resolve(user));

      // Act
      const userInserted = await userController.insert(request);

      // Assert
      expect(userInserted).toEqual(request);
      //expect(true).toEqual(true);
    },
    24 * 60 * 60 * 1000,
  );

  it('List of users', async () => {
    // Arrange
    const users = [
      {
        id: 'ef310faa-7bed-480f-9cdc-36995e907dcc',
        fullname: 'user01',
        email: 'user01@email.com',
        image: 'foto.jpg',
        roles: [
          { id: '287e84a5-698d-4f6c-b5bf-4d2c0e4daa52' },
          { id: 'cfd51374-d308-46ed-b656-d2257337c69a' },
        ],
        address: {
          street: 'Rua 1',
          number: 123,
          city: 'Bogotá',
          country: 'Colombia',
        },
        password: 'Mundo12345',
      },
      {
        id: 'cfd51374-d308-46ed-b656-d2257337c69a',
        fullname: 'user02',
        email: 'user02@email.com',
        image: 'foto.jpg',
        roles: [
          { id: '287e84a5-698d-4f6c-b5bf-4d2c0e4daa52' },
          { id: 'cfd51374-d308-46ed-b656-d2257337c69a' },
        ],
        address: {
          street: 'Rua 1',
          number: 123,
          city: 'Bogotá',
          country: 'Colombia',
        },
        password: 'Mundo12345',
      },
      {
        id: '287e84a5-698d-4f6c-b5bf-4d2c0e4daa52',
        fullname: 'user03',
        email: 'user03@email.com',
        image: 'foto.jpg',
        roles: [
          { id: '287e84a5-698d-4f6c-b5bf-4d2c0e4daa52' },
          { id: 'cfd51374-d308-46ed-b656-d2257337c69a' },
        ],
        address: {
          street: 'Rua 1',
          number: 123,
          city: 'Bogotá',
          country: 'Colombia',
        },
        password: 'Mundo12345',
      },
    ];

    const usersInstance = users.map((user) => {
      const userResponse = new UserResponse();
      userResponse.id = user.id;
      userResponse.fullname = user.fullname;
      userResponse.email = user.email;
      userResponse.image = user.image;
      userResponse.roles = user.roles;
      userResponse.address = user.address;
      userResponse.password = user.password;

      return userResponse;
    });

    jest
      .spyOn(userList, 'execute')
      .mockImplementation(() => Promise.resolve(usersInstance));

    // Act
    const usersFound = (await userController.list()) as UserResponse[];

    // Assert
    expect(usersFound).toEqual(usersInstance);
    expect(usersFound.length).toEqual(3);
    expect(usersFound[0].id).toEqual(usersInstance[0].id);
    expect(usersFound[1]).toHaveProperty('image');
  });

  it('Delete user', async () => {
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

    jest
      .spyOn(userCreate, 'execute')
      .mockImplementation(() => Promise.resolve(user));
    jest
      .spyOn(userGetOne, 'execute')
      .mockImplementation(() => Promise.resolve(user));

    const userDeleted = (await userController.delete({
      id: 'ef310faa-7bed-480f-9cdc-36995e907dcc',
    })) as UserResponse;

    expect(userDeleted).toHaveProperty('id');
    expect(userDeleted).toHaveProperty('fullname');
    expect(userDeleted).toHaveProperty('email');
    expect(userDeleted).toHaveProperty('image');
    expect(userDeleted).toHaveProperty('roles');
    expect(userDeleted).toHaveProperty('address');
    expect(userDeleted).toHaveProperty('password');

    expect(userDeleted.id).toEqual(request.id);
  });
});
