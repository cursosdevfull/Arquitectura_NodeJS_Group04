import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "./user";

@Entity({ name: "car" })
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  brand: string;

  @Column({ type: "varchar", length: 100 })
  model: string;

  @Column({ type: "int" })
  year: number;

  @ManyToMany(() => UserEntity, (user) => user.cars)
  users: UserEntity[];
}
