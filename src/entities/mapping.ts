import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Words } from "./Words";

@Entity()
export class Subjects {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 128 })
  Name: string;

  @Column({ length: 128, nullable: true })
  Image: string;

  @OneToMany(() => Words, (word) => word.Subject)
  Words: Words[];
}
