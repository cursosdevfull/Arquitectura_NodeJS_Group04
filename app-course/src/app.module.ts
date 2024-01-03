import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './modules/appointment/infrastructure/presentation/appointment.module';
import { CourseModule } from './modules/course/infrastructure/presentation/course.module';
import { RoleModule } from './modules/role/infrastructure/presentation/role.module';
import { ScheduleModule } from './modules/schedule/infrastructure/presentation/schedule.module';
import { UserModule } from './modules/user/infrastructure/presentation/user.module';

@Module({
  imports: [
    UserModule,
    RoleModule,
    AppointmentModule,
    CourseModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
