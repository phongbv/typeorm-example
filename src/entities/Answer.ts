import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Question } from "./Question";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(() => Question, { onDelete: "CASCADE" })
  QuestionId: Question;

  @Column("text")
  AnswerText: string;

  @Column()
  IsCorrect: boolean;
}
