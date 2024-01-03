import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ScheduleCreatedEvent } from '../../domain/events/schedule-created';

@EventsHandler(ScheduleCreatedEvent)
export class ScheduleCreatedEventHandler
  implements IEventHandler<ScheduleCreatedEvent>
{
  handle(event: ScheduleCreatedEvent) {
    console.log('ScheduleCreatedEvent', event);
  }
}
