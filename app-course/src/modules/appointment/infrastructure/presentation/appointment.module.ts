import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppointmentCOCommandHandler } from '../../application/commands/appointment-co.command';
import { AppointmentMXCommandHandler } from '../../application/commands/appointment-mx.command';
import { AppointmentPECommandHandler } from '../../application/commands/appointment-pe.command';
import { AppointmentController } from './appointment.controller';

const application = [
  AppointmentPECommandHandler,
  AppointmentMXCommandHandler,
  AppointmentCOCommandHandler,
];

@Module({
  imports: [CqrsModule],
  controllers: [AppointmentController],
  providers: [...application],
})
export class AppointmentModule {}
