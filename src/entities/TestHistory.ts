import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class TestHistory {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne(() => Users)
  UserId: Users;

  @Column()
  Score: number;

  @Column()
  DateCompleted: Date;
}
