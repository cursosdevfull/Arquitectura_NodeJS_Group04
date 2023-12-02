import { Inject } from '@nestjs/common';

import { EnrollService } from './enroll.service';

export class StudentService {
  constructor(
    @Inject('CONFIG4') private readonly config: { serverOAuth2: string },
    private readonly enrollService: EnrollService,
  ) {}

  getAll() {
    return Promise.resolve([
      'student1',
      'student2',
      'student3',
      this.config.serverOAuth2,
      this.enrollService.enroll(),
    ]);
  }
}
