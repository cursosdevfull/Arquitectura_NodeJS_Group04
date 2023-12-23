import { Inject, Injectable } from '@nestjs/common';

import { RoleRepository } from '../domain/repositories/role.repository';
import { RoleInfrastructure } from '../infrastructure/role.infrastructure';

@Injectable()
export class RoleList {
  constructor(
    @Inject(RoleInfrastructure) private readonly repository: RoleRepository,
  ) {}

  async execute() {
    const roleInserted = await this.repository.list();
    return roleInserted;
  }
}
