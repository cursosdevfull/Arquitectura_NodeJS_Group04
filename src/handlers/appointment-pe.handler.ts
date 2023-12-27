import { IAppointment } from "../commands/appointment";
import { AppointmentPECommand } from "../commands/appointment-pe.command";
import { ICommandHandler } from "./command-handler";

export class AppointmentPECommandHandler
  implements ICommandHandler<IAppointment>
{
  canHandle(command: IAppointment): boolean {
    return command instanceof AppointmentPECommand;
  }
  handle(command: IAppointment): void {
    console.log(`Handling appointment for PE: ${JSON.stringify(command)}`);
  }
}
