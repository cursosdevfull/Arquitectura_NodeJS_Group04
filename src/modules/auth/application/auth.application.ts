import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { TokenService } from '../../../core/domain/services/token.service';
import { Crypt } from '../../../core/infrastructure/presentation/services/crypt.service';
import { UserRepository } from '../../../modules/user/domain/repositories/user.repository';
import { UserInfrastructure } from '../../../modules/user/infrastructure/user.infrastructure';
import { Auth } from '../domain/auth';
import { AuthLoginResponseDto } from './dtos/auth-login-response.dto';

@Injectable()
export class AuthApplication {
  constructor(
    @Inject(UserInfrastructure) private readonly repository: UserRepository,
  ) {}

  async login(auth: Auth) {
    const user = await this.repository.findByEmail(auth.properties.email);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const passwordMatch = await Crypt.compare(
      auth.properties.password,
      user.properties().password,
    );
    if (!passwordMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    const response = new AuthLoginResponseDto();
    response.accessToken = TokenService.generateAccessToken(user);
    response.refreshToken = TokenService.generateRefreshToken();

    return response;
  }
}
