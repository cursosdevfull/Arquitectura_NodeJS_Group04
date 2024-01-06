import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CourseUpdateDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;
}
