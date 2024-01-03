import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class AppointmentCreateDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  patientId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  doctorId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  specialtyId: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  centerId: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsNotEmpty()
  @IsString()
  @IsEnum(['CO', 'PE', 'MX'])
  countryIso: string;
}
