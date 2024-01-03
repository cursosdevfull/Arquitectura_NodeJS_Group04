import { PaginateResult } from '../../../../core/domain/interfaces/paginate.interface';
import { Schedule } from '../roots/schedule';

export interface ScheduleRepository {
  save(schedule: Schedule): Promise<Schedule>;
  findById(id: string): Promise<Schedule | undefined>;
  findAll(): Promise<Schedule[]>;
  findByPage(page: number, pageSize: number): Promise<PaginateResult<Schedule>>;
}
