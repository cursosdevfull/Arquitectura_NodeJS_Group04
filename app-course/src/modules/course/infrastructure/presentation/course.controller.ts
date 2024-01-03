import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CourseApplication } from '../../application/course.application';
import { CourseService } from '../../application/services/course.service';
import { Course, CourseProps } from '../../domain/roots/course';
import { CourseByPageDto } from './dtos/course-by-page';
import { CourseCreateDto } from './dtos/course-create.dto';
import { CourseIdDto } from './dtos/course-id.dto';
import { CourseSlugDto } from './dtos/course-slug.dto';
import { CourseUpdateDto } from './dtos/course-update.dto';

@Controller('course')
export class CourseController {
  constructor(
    private readonly application: CourseApplication,
    private readonly courseService: CourseService,
  ) {}

  @Post()
  async insert(@Body() body: CourseCreateDto) {
    const slug = await this.courseService.generateSlug(body.title);

    const props: CourseProps = {
      id: uuidv4(),
      title: body.title,
      slug,
    };
    const course = new Course(props);

    return await this.application.save(course);
  }

  @Put(':id')
  async update(@Body() body: CourseUpdateDto, @Param() param: CourseIdDto) {
    const course = await this.application.findById(param.id);
    course.update(body);

    return await this.application.save(course);
  }

  @Delete(':id')
  async delete(@Param() param: CourseIdDto) {
    const course = await this.application.findById(param.id);
    course.delete();

    return await this.application.save(course);
  }

  @Get()
  async findAll() {
    return await this.application.findAll();
  }

  @Get(':id')
  async findById(@Param() param: CourseIdDto) {
    return await this.application.findById(param.id);
  }

  @Get(':slug')
  async findBySlug(@Param() param: CourseSlugDto) {
    return await this.application.findBySlug(param.slug);
  }

  @Get(':page/:pageSize')
  async findByPage(@Param() param: CourseByPageDto) {
    return await this.application.findByPage(param.page, param.pageSize);
  }
}
