import { Inject } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';

import { PaginateResult } from '../../../core/domain/interfaces/paginate.interface';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import { ScheduleDto } from './dtos/schedule.dto';
import { ScheduleEntity } from './entities/schedule.entity';

export class ScheduleInfrastructure implements ScheduleRepository {
  constructor(
    @Inject('SCHEDULE_REPOSITORY')
    private readonly repository: Repository<ScheduleEntity>,
  ) {}

  async save(schedule: Schedule): Promise<Schedule> {
    const userEntity = ScheduleDto.fromDomainToData(schedule);
    await this.repository.save(userEntity);
    return schedule;
  }

  async findById(id: string): Promise<Schedule> {
    const scheduleEntity = await this.repository.findOne({
      where: { id, deletedAt: IsNull() },
    });

    if (!scheduleEntity) return null;

    return ScheduleDto.fromDataToDomain(scheduleEntity) as Schedule;
  }

  async findAll(): Promise<Schedule[]> {
    const listScheduleEntity = await this.repository.find({
      where: { deletedAt: IsNull() },
    });

    if (!listScheduleEntity) return null;

    return ScheduleDto.fromDataToDomain(listScheduleEntity) as Schedule[];
  }
  async findByPage(
    page: number,
    pageSize: number,
  ): Promise<PaginateResult<Schedule>> {
    const [records, total] = await this.repository.findAndCount({
      skip: page * pageSize,
      take: pageSize,
      where: { deletedAt: IsNull() },
    });

    if (!records) return null;

    return ScheduleDto.fromDataToDomainPaginate(records, total);
  }
}
