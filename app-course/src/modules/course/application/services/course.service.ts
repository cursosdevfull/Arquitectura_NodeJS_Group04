import { Inject, Injectable } from '@nestjs/common';
import slugify from 'slugify';

import { CourseRepository } from '../../domain/repositories/course.repository';
import { CourseInfrastructure } from '../../infrastructure/course.infrastructure';

@Injectable()
export class CourseService {
  constructor(
    @Inject(CourseInfrastructure) private readonly repository: CourseRepository,
  ) {}

  async generateSlug(title: string): Promise<string> {
    let slugGenerated = '';
    let count = 0;

    do {
      const prevTitle = count === 0 ? title : `${title}-${count}`;
      slugGenerated = slugify(prevTitle, { lower: true, trim: true });
      const existsCourse = await this.repository.findBySlug(slugGenerated);

      if (existsCourse) {
        slugGenerated = '';
        count++;
      }
    } while (slugGenerated === '');

    return slugGenerated;
  }
}
