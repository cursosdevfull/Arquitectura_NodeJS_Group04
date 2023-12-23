import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { RoleRepository } from '../domain/repositories/role.repository';
import { Role } from '../domain/role';
import { RoleDto } from './dtos/role.dto';
import { RoleEntity } from './entities/role.entity';

export class RoleInfrastructure implements RoleRepository {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private readonly repository: Repository<RoleEntity>,
  ) {}

  async list(): Promise<Role[]> {
    const result = await this.repository.find({});
    return RoleDto.fromDataToDomain(result) as Role[];
  }
}
