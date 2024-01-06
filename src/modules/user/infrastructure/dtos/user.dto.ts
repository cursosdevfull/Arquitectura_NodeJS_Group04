import { RoleEntity } from '../../../role/infrastructure/entities/role.entity';
import { Address } from '../../domain/entities/address';
import { User } from '../../domain/roots/user';
import { UserEntity } from '../entities/user.entity';

export class UserDto {
  static fromDomainToData(data: User | User[]): UserEntity | UserEntity[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.fromDomainToData(item)) as UserEntity[];
    }
    const {
      id,
      fullname,
      email,
      password,
      image,
      refreshToken,
      createdAt,
      updatedAt,
      deletedAt,
      roles,
      address,
    } = data.properties();
    const userEntity = new UserEntity();
    userEntity.id = id;
    userEntity.fullname = fullname;
    userEntity.email = email;
    userEntity.password = password;
    userEntity.image = image;
    userEntity.refreshToken = refreshToken;
    userEntity.createdAt = createdAt;
    userEntity.updatedAt = updatedAt;
    userEntity.deletedAt = deletedAt;
    userEntity.roles = roles.map((role) => {
      const roleEntity = new RoleEntity();
      roleEntity.id = role.id;
      roleEntity.name = role.name;
      return roleEntity;
    });
    userEntity.address = address;
    return userEntity;
  }

  static fromDataToDomain(data: UserEntity | UserEntity[]): User | User[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.fromDataToDomain(item)) as User[];
    }
    const {
      id,
      fullname,
      email,
      password,
      image,
      refreshToken,
      createdAt,
      updatedAt,
      deletedAt,
      roles,
      address,
    } = data;
    const user = new User({
      id,
      fullname,
      email,
      password,
      image,
      refreshToken,
      createdAt,
      updatedAt,
      deletedAt: deletedAt,
      roles: roles.map((role) => {
        return {
          id: role.id,
          name: role.name,
        };
      }),
      address: Object.assign(new Address(), address),
    });
    return user;
  }
}
