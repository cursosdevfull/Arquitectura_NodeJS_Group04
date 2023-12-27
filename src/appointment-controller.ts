import { AppointmentCOCommand } from "./commands/appointment-co.command";
import { AppointmentMXCommand } from "./commands/appointment-mx.command";
import { AppointmentPECommand } from "./commands/appointment-pe.command";
import { ICommand } from "./commands/command";
import { CommandBus } from "./commands/command-bus";

export class AppointmentController {
  constructor(private readonly commandBus: CommandBus) {}

  addAppointment(
    patientId: number,
    medicId: number,
    dateAppointmentId: number,
    country: string
  ) {
    let command!: ICommand;
    switch (country) {
      case "MX":
        command = new AppointmentMXCommand({
          patientId,
          medicId,
          dateAppointmentId,
          country,
        });
        break;

      case "CO":
        command = new AppointmentCOCommand({
          patientId,
          medicId,
          dateAppointmentId,
          country,
        });
        break;

      case "PE":
        command = new AppointmentPECommand({
          patientId,
          medicId,
          dateAppointmentId,
          country,
        });
        break;
    }

    this.commandBus.execute(command);
  }
}
