import { IAppointment } from "./appointment";
import { ICommand } from "./command";

export class AppointmentPECommand implements ICommand {
  constructor(private readonly appointment: IAppointment) {}

  get properties() {
    return this.appointment;
  }
}
