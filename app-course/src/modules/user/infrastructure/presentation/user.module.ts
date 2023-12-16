import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../../core/infrastructure/nestjs/database/database.module';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
})
export class UserModule {}
