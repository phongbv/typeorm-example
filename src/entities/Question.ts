import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Words } from "./Words";
import { TestCategory } from "./TestCategory";
import { Answer } from "./Answer";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(() => TestCategory, (cat) => cat.Code, { onDelete: "CASCADE" })
  TestCategory: TestCategory;

  @ManyToOne(() => Words)
  Word: Words;

  @Column("text")
  QuestionText: string;

  @OneToMany(() => Answer, (answer) => answer.QuestionId)
  Answers: Answer[];
}
