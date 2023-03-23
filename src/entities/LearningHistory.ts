import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserLearning } from "./UserLearning";
import { Words } from "./Words";

@Entity()
export class LearningHistory {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Time: Date;

  @ManyToOne(() => Words)
  WordId: Words;

  @ManyToOne(() => UserLearning)
  UserLearnId: UserLearning;
}
