import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Question } from "./Question";
import { TestHistory } from "./TestHistory";

@Entity()
export class WordAnswer {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne(() => TestHistory)
  TestHistoryId: TestHistory;

  @Column()
  IsCorrect: boolean;

  @ManyToOne(() => Question, { onDelete: "CASCADE" })
  QuestionId: Question;
}
