import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { CarEntity } from "./car";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 100 })
  password: string;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @ManyToMany(() => CarEntity, (car) => car.users, { cascade: true })
  @JoinTable()
  cars: CarEntity[];
}
