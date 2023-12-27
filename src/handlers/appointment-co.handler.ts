import { IAppointment } from "../commands/appointment";
import { AppointmentCOCommand } from "../commands/appointment-co.command";
import { ICommandHandler } from "./command-handler";

export class AppointmentCOCommandHandler
  implements ICommandHandler<IAppointment>
{
  canHandle(command: IAppointment): boolean {
    return command instanceof AppointmentCOCommand;
  }
  handle(command: IAppointment): void {
    console.log(`Handling appointment for CO: ${JSON.stringify(command)}`);
  }
}
