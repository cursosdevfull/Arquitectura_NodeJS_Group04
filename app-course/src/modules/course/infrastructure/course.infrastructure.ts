import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { PaginateResult } from '../../../core/domain/interfaces/paginate.interface';
import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseDto } from './dtos/course.dto';
import { CourseEntity } from './entities/course.entity';

@Injectable()
export class CourseInfrastructure implements CourseRepository {
  constructor(
    @Inject('COURSE_REPOSITORY')
    private readonly repository: Repository<CourseEntity>,
  ) {}

  async save(course: Course): Promise<Course> {
    const userEntity = CourseDto.fromDomainToData(course);
    await this.repository.save(userEntity);
    return course;
  }

  async findById(id: string): Promise<Course> {
    const courseEntity = await this.repository.findOne({
      where: { id, isDeleted: false },
    });

    if (!courseEntity) return null;

    return CourseDto.fromDataToDomain(courseEntity) as Course;
  }

  async findBySlug(slug: string): Promise<Course> {
    const courseEntity = await this.repository.findOne({
      where: { slug, isDeleted: false },
    });

    if (!courseEntity) return null;

    return CourseDto.fromDataToDomain(courseEntity) as Course;
  }
  async findAll(): Promise<Course[]> {
    const listCourseEntity = await this.repository.find({
      where: { isDeleted: false },
    });

    if (!listCourseEntity) return null;

    return CourseDto.fromDataToDomain(listCourseEntity) as Course[];
  }
  async findByPage(
    page: number,
    pageSize: number,
  ): Promise<PaginateResult<Course>> {
    const [records, total] = await this.repository.findAndCount({
      skip: page * pageSize,
      take: pageSize,
      where: { isDeleted: false },
    });

    if (!records) return null;

    return CourseDto.fromDataToDomainPaginate(records, total);
  }
}
