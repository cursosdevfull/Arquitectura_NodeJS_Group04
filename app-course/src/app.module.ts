import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './modules/appointment/infrastructure/presentation/appointment.module';
import { CourseModule } from './modules/course/infrastructure/presentation/course.module';
import { RoleModule } from './modules/role/infrastructure/presentation/role.module';
import { ScheduleModule } from './modules/schedule/infrastructure/presentation/schedule.module';
import { UserModule } from './modules/user/infrastructure/presentation/user.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TerminusModule,
    UserModule,
    RoleModule,
    AppointmentModule,
    CourseModule,
    ScheduleModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
