import { ICommandHandler } from "../handlers/command-handler";
import { ICommand } from "./command";

export class CommandBus {
  private static instance: CommandBus;
  private readonly handlers: ICommandHandler<any>[] = [];

  private constructor() {}

  static create(): CommandBus {
    if (!CommandBus.instance) {
      CommandBus.instance = new CommandBus();
    }

    return CommandBus.instance;
  }

  registerHandler(handler: ICommandHandler<any>) {
    this.handlers.push(handler);
  }

  execute(command: ICommand) {
    const handler = this.handlers.find((handler) => handler.canHandle(command));
    if (!handler) {
      throw new Error(`No handler for ${command.constructor.name} found`);
    }

    handler.handle(command);
  }
}
