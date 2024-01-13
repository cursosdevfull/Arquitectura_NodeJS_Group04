import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../../core/infrastructure/nestjs/database/database.module';
import { UserCreate } from '../../application/user-create';
import { UserGetOne } from '../../application/user-get-one';
import { UserList } from '../../application/user-list';
import { userProviders } from '../providers/user.provider';
import { UserInfrastructure } from '../user.infrastructure';
import { UserController } from './user.controller';

const applications = [UserCreate, UserList, UserGetOne];
const infra = [UserInfrastructure];
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, ...applications, ...infra],
  exports: [UserInfrastructure],
})
export class UserModule {}
