import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../../core/infrastructure/nestjs/database/database.module';
import { RoleList } from '../../application/role-list';
import { roleProviders } from '../providers/role.provider';
import { RoleInfrastructure } from '../role.infrastructure';
import { RoleController } from './role.controller';

const applications = [RoleList];
const infra = [RoleInfrastructure];
@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [...roleProviders, ...applications, ...infra],
})
export class RoleModule {}
