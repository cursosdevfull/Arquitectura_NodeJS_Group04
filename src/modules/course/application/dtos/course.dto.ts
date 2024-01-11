import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

import { Course } from '../../domain/roots/course';

export class CourseResponse {
  @ApiProperty({
    type: 'string',
    example: 'fd6e0268-b044-4c1d-9f05-b56e8346f5a0',
  })
  id: string;

  @ApiProperty({
    type: 'string',
    example: 'Curso de NodeJS',
  })
  title: string;

  @ApiProperty({
    type: 'string',
    example: 'curso-nodejs',
  })
  slug: string;

  @ApiProperty({
    type: 'date',
    example: '2021-05-05T00:00:00.000Z',
  })
  createdAt: Date;
}

export class CourseDto {
  static fromDomainToResponse(course: Course): CourseResponse {
    return plainToInstance(CourseResponse, course.properties);
  }
}
