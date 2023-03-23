import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Question } from "./Question";

@Entity("TestCategory")
export class TestCategory {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 500 })
  Name: string;

  @Column({ length: 50 })
  Code: string;

  @OneToMany(() => Question, (question) => question.TestCategory)
  Questions: Question[];
}
