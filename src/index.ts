import { AppointmentController } from "./appointment-controller";
import { CommandBus } from "./commands/command-bus";
import { AppointmentCOCommandHandler } from "./handlers/appointment-co.handler";
import { AppointmentMXCommandHandler } from "./handlers/appointment-mx.handler";
import { AppointmentPECommandHandler } from "./handlers/appointment-pe.handler";

const commandBus: CommandBus = CommandBus.create();
commandBus.registerHandler(new AppointmentMXCommandHandler());
commandBus.registerHandler(new AppointmentCOCommandHandler());
commandBus.registerHandler(new AppointmentPECommandHandler());

const controller = new AppointmentController(commandBus);
controller.addAppointment(1, 2, 3, "MX");
