import { Inject, Injectable } from '@nestjs/common';

import { PaginateResult } from '../../../core/domain/interfaces/paginate.interface';
import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';

@Injectable()
export class CourseApplication {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async save(course: Course): Promise<Course> {
    return await this.repository.save(course);
  }

  async findById(id: string): Promise<Course> {
    return await this.repository.findById(id);
  }

  async findBySlug(slug: string): Promise<Course> {
    return await this.repository.findBySlug(slug);
  }

  async findAll(): Promise<Course[]> {
    return await this.repository.findAll();
  }

  async findByPage(
    page: number,
    pageSize: number,
  ): Promise<PaginateResult<Course>> {
    return await this.repository.findByPage(page, pageSize);
  }
}
