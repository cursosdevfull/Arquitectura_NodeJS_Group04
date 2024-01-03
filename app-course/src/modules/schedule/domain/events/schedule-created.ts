import { IEvent } from '@nestjs/cqrs';

export class ScheduleCreatedEvent implements IEvent {
  readonly id: string;
  readonly title: string;
  readonly type: string;
  readonly summary: string;
  readonly slogan: string;
  readonly prices: object;
  readonly dateStart: Date;
  readonly sessionsTotal: number;
}
