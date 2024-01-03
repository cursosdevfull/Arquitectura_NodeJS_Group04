import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { Appointment } from '../../domain/appointment';

export class AppointmentMXCommand implements ICommand {
  patientId: string;
  doctorId: string;
  specialtyId: string;
  centerId: number;
  date: Date;
}

@CommandHandler(AppointmentMXCommand)
export class AppointmentMXCommandHandler
  implements ICommandHandler<AppointmentMXCommand>
{
  execute(command: AppointmentMXCommand): Promise<any> {
    console.log('AppointmentMXCommandHandler', command);
    const { patientId, doctorId, specialtyId, centerId, date } = command;
    const appointment = new Appointment(
      patientId,
      doctorId,
      specialtyId,
      centerId,
      date,
      'MX',
    );

    return Promise.resolve(appointment.properties.id);
  }
}
