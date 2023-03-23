import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Subjects } from "./mapping";

@Entity()
export class Words {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 100 })
  Name: string;

  @ManyToOne(() => Subjects)
  Subject: Subjects;

  @Column({ length: 500 })
  Definition: string;

  @Column({ length: 1000 })
  Example: string;
}
