import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { Appointment } from '../../domain/appointment';

export class AppointmentPECommand implements ICommand {
  patientId: string;
  doctorId: string;
  specialtyId: string;
  centerId: number;
  date: Date;
}

@CommandHandler(AppointmentPECommand)
export class AppointmentPECommandHandler
  implements ICommandHandler<AppointmentPECommand>
{
  execute(command: AppointmentPECommand): Promise<any> {
    console.log('AppointmentPECommandHandler', command);
    const { patientId, doctorId, specialtyId, centerId, date } = command;
    const appointment = new Appointment(
      patientId,
      doctorId,
      specialtyId,
      centerId,
      date,
      'PE',
    );

    return Promise.resolve(appointment.properties.id);
  }
}
