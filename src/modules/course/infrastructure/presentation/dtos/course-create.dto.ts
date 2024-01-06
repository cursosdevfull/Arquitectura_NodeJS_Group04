import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CourseCreateDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;
}
