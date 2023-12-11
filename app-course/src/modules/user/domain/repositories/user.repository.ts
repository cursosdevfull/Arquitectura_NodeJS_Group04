import { User } from '../roots/user';

export interface UserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByRefreshToken(refreshToken: string): Promise<User>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>;
  listByPage(page: number, pageSize: number): Promise<User[]>;
}
