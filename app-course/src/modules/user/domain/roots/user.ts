import { Role } from '../entities/role';

export interface UserEssentials {
  readonly fullname: string;
  readonly image: string;
  readonly email: string;
  readonly password: string;
  readonly refreshToken: string;
  readonly roles: Role[];
}

export interface UserOptionals {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
}

export type UserProperties = UserEssentials & Partial<UserOptionals>;

export class User {
  private readonly id: string;
  private fullname: string;
  private image: string;
  private readonly email: string;
  private password: string;
  private refreshToken: string;
  private roles: Role[];
  private createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserProperties) {
    Object.assign(this, props);
    this.createdAt = new Date();
  }

  properties() {
    return {
      id: this.id,
      fullname: this.fullname,
      image: this.image,
      email: this.email,
      password: this.password,
      refreshToken: this.refreshToken,
      roles: this.roles,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  //   static create(props: UserProperties): User {
  //     IdVO.create(props.id);
  //     RefreshTokenVO.create(props.refreshToken);
  //     RolesVO.create(props.roles);
  //     FullnameVO.create(props.fullname);
  //     EmailVO.create(props.email);
  // if (props.id && (props.id.length === 0 || !validate(props.id)))
  //   throw new Error('Invalid id');
  // if (
  //   props.refreshToken &&
  //   (props.refreshToken.length === 0 || !validate(props.refreshToken))
  // )
  //   throw new Error('Invalid refreshToken');
  // if (props.roles.length === 0) throw new Error('Invalid roles');
  // if (props.fullname.length === 0) throw new Error('Invalid fullname');
  // if (!props.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/))
  //   throw new Error('Invalid email');

  //     return new User(props);
  //   }
}
