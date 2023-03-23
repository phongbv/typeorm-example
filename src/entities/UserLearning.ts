import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Words } from "./Words";
import { Users } from "./Users";

@Entity()
export class UserLearning {
  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(() => Users)
  UserId: Users;

  @ManyToOne(() => Words)
  WordId: Words;

  @Column()
  LastLearning: Date;

  @Column({ length: 10 })
  Status: string;
}
