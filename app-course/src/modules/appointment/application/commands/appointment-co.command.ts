import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { Appointment } from '../../domain/appointment';

export class AppointmentCOCommand implements ICommand {
  patientId: string;
  doctorId: string;
  specialtyId: string;
  centerId: number;
  date: Date;
}

@CommandHandler(AppointmentCOCommand)
export class AppointmentCOCommandHandler
  implements ICommandHandler<AppointmentCOCommand>
{
  execute(command: AppointmentCOCommand): Promise<any> {
    console.log('AppointmentCOCommandHandler', command);
    const { patientId, doctorId, specialtyId, centerId, date } = command;
    const appointment = new Appointment(
      patientId,
      doctorId,
      specialtyId,
      centerId,
      date,
      'CO',
    );

    return Promise.resolve(appointment.properties.id);
  }
}
