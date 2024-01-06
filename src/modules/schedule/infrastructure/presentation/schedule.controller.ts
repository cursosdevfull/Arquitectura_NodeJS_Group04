import { Body, Controller, Inject, Post } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';

import { ScheduleApplication } from '../../application/schedule.application';
import { ScheduleCreatedEvent } from '../../domain/events/schedule-created';
import { Schedule, ScheduleProps } from '../../domain/roots/schedule';
import { ScheduleCreateDto } from './dtos/schedule-create.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly application: ScheduleApplication,
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher,
  ) {}

  @Post()
  async insert(@Body() body: ScheduleCreateDto) {
    const props = {
      id: uuidv4(),
      ...body,
    };
    const schedule = new Schedule(props as ScheduleProps);

    this.eventPublisher.mergeObjectContext(schedule);
    schedule.apply(Object.assign(new ScheduleCreatedEvent(), schedule));

    const scheduleCreated = await this.application.save(schedule);
    schedule.commit();

    return scheduleCreated;
  }
}
