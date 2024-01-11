import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { RoleList } from '../../application/role-list';

@ApiTags('Role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleList: RoleList) {}

  @Get()
  async insert() {
    const result = await this.roleList.execute();
    return result;
  }
}
