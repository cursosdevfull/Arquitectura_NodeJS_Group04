import { Inject, Injectable } from '@nestjs/common';

import { PaginateResult } from '../../../core/domain/interfaces/paginate.interface';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

@Injectable()
export class ScheduleApplication {
  constructor(
    @Inject(ScheduleInfrastructure)
    private readonly repository: ScheduleRepository,
  ) {}

  async save(schedule: Schedule): Promise<Schedule> {
    return await this.repository.save(schedule);
  }

  async findById(id: string): Promise<Schedule> {
    return await this.repository.findById(id);
  }

  async findAll(): Promise<Schedule[]> {
    return await this.repository.findAll();
  }

  async findByPage(
    page: number,
    pageSize: number,
  ): Promise<PaginateResult<Schedule>> {
    return await this.repository.findByPage(page, pageSize);
  }
}
