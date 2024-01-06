import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { DatabaseModule } from '../../../../core/infrastructure/nestjs/database/database.module';
import { ScheduleCreatedEventHandler } from '../../application/events/schedule-created-event.handler';
import { ScheduleApplication } from '../../application/schedule.application';
import { scheduleProviders } from '../providers/schedule.provider';
import { ScheduleInfrastructure } from '../schedule.infrastructure';
import { ScheduleController } from './schedule.controller';

const infrastructure = [ScheduleInfrastructure];
const application = [ScheduleApplication, ScheduleCreatedEventHandler];
const otherProviders = [...scheduleProviders];

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [ScheduleController],
  providers: [...infrastructure, ...application, ...otherProviders],
})
export class ScheduleModule {}
