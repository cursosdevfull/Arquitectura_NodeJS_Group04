import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../../core/infrastructure/nestjs/database/database.module';
import { CourseApplication } from '../../application/course.application';
import { CourseService } from '../../application/services/course.service';
import { CourseInfrastructure } from '../course.infrastructure';
import { courseProviders } from '../providers/course.provider';
import { CourseController } from './course.controller';

const infrastructure = [CourseInfrastructure];
const application = [CourseApplication];
const otherProviders = [...courseProviders, CourseService];

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [...infrastructure, ...application, ...otherProviders],
})
export class CourseModule {}
