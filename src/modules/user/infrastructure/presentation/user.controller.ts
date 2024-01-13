import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  RoleEnum,
  Roles,
} from '../../../../core/infrastructure/presentation/decorators/roles';
import { AuthenticationGuard } from '../../../../core/infrastructure/presentation/guards/authentication.guard';
import { AuthorizationGuard } from '../../../../core/infrastructure/presentation/guards/authorization.guard';
import { Crypt } from '../../../../core/infrastructure/presentation/services/crypt.service';
import { UserCreate } from '../../application/user-create';
import { UserGetOne } from '../../application/user-get-one';
import { UserList } from '../../application/user-list';
import { UserProperties, UserUpdateProperties } from '../../domain/roots/user';
import { UserFactory } from '../../domain/roots/user-factory';
import { UserResponseDto } from './dtos/responses/user-response.dto';
import { UserCreateDto } from './dtos/user-create.dto';
import { UserGetOneDto } from './dtos/user-get-one.dto';
import { UserUpdateDto } from './dtos/user.update.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userList: UserList,
    private readonly userCreate: UserCreate,
    private readonly userGetOne: UserGetOne,
  ) {}

  @Post()
  async insert(@Body() body: UserCreateDto) {
    const userProperties: UserProperties = {
      ...body,
      password: await Crypt.encrypt(body.password),
    };

    const user = UserFactory.create(userProperties);

    await this.userCreate.execute(user);
    return body;
  }

  @Get()
  @Roles(RoleEnum.STUDENT, RoleEnum.TEACHER)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  async list() {
    const users = await this.userList.execute();
    return users;
  }

  @Get('/:id')
  async getOne(@Param() params: UserGetOneDto) {
    const { id } = params;
    const user = await this.userGetOne.execute(id);
    return UserResponseDto.fromDomainToResponse(user);
  }

  @Put('/:id')
  async update(@Body() body: UserUpdateDto, @Param() params: UserGetOneDto) {
    const userUpdateProperties: UserUpdateProperties = body;
    const { id } = params;

    const userFound = await this.userGetOne.execute(id);
    userFound.update(userUpdateProperties);

    if (userFound) {
      await this.userCreate.execute(userFound);
    }

    return UserResponseDto.fromDomainToResponse(userFound);
  }

  @Delete('/:id')
  async delete(@Param() params: UserGetOneDto) {
    const { id } = params;

    const userFound = await this.userGetOne.execute(id);
    userFound.delete();

    if (userFound) {
      await this.userCreate.execute(userFound);
    }

    return UserResponseDto.fromDomainToResponse(userFound);
  }
}
