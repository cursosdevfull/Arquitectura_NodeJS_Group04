import { Address } from '../entities/address';
import { Role } from '../entities/role';

export interface UserEssentials {
  readonly fullname: string;
  readonly image: string;
  readonly email: string;
  readonly password: string;
  readonly roles: Role[];
}

export interface UserOptionals {
  readonly id: string;
  readonly address: Address;
  refreshToken: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
}

export type UserProperties = UserEssentials & Partial<UserOptionals>;
export type UserUpdateProperties = Partial<
  Omit<UserEssentials, 'refreshToken'> &
    Omit<UserOptionals, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
>;

export class User {
  private readonly id: string;
  private fullname: string;
  private image: string;
  private address: Address;
  private readonly email: string;
  private password: string;
  private refreshToken: string;
  private roles: Role[];
  private createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserProperties) {
    Object.assign(this, props);
    if (!props.createdAt) this.createdAt = new Date();
  }

  properties() {
    return {
      id: this.id,
      fullname: this.fullname,
      image: this.image,
      address: this.address,
      email: this.email,
      password: this.password,
      refreshToken: this.refreshToken,
      roles: this.roles,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(fieldsToUpdate: UserUpdateProperties) {
    Object.assign(this, fieldsToUpdate);
    this.updatedAt = new Date();
  }

  delete() {
    this.deletedAt = new Date();
  }
}
