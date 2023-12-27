import { IAppointment } from "../commands/appointment";
import { AppointmentMXCommand } from "../commands/appointment-mx.command";
import { ICommandHandler } from "./command-handler";

export class AppointmentMXCommandHandler
  implements ICommandHandler<IAppointment>
{
  canHandle(command: IAppointment): boolean {
    return command instanceof AppointmentMXCommand;
  }
  handle(command: IAppointment): void {
    console.log(`Handling appointment for MX: ${JSON.stringify(command)}`);
  }
}
