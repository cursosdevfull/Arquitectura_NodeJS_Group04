import { Controller, Get } from '@nestjs/common';

import { RoleList } from '../../application/role-list';

@Controller('role')
export class RoleController {
  constructor(private readonly roleList: RoleList) {}

  @Get()
  async insert() {
    const result = await this.roleList.execute();
    return result;
  }
}
