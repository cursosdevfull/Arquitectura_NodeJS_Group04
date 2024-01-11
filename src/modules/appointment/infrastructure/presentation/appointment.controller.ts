import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiExcludeController } from '@nestjs/swagger';

import { AppointmentCOCommand } from '../../application/commands/appointment-co.command';
import { AppointmentMXCommand } from '../../application/commands/appointment-mx.command';
import { AppointmentPECommand } from '../../application/commands/appointment-pe.command';
import { AppointmentCreateDTO } from './dtos/appointment-create.dto';

const countryCommands = {
  CO: AppointmentCOCommand,
  PE: AppointmentPECommand,
  MX: AppointmentMXCommand,
};

@ApiExcludeController()
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createAppointment(@Body() appointment: AppointmentCreateDTO) {
    const appointmentCommand = new countryCommands[appointment.countryIso]();
    Object.assign(appointmentCommand, appointment);

    const IdReturned = await this.commandBus.execute(appointmentCommand);

    return { IdReturned };
  }
}
