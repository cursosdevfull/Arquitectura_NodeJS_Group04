import { Module } from '@nestjs/common';

import { UserModule } from '../../../user/infrastructure/presentation/user.module';
import { AuthApplication } from '../../application/auth.application';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthApplication],
  imports: [UserModule],
})
export class AuthModule {}
