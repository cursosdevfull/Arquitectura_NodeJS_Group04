import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  async insert(@Body() body: any) {
    return body;
  }
}
