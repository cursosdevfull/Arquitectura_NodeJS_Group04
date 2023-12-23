import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './modules/role/infrastructure/presentation/role.module';
import { UserModule } from './modules/user/infrastructure/presentation/user.module';

@Module({
  imports: [UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
