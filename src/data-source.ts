import "reflect-metadata";
import { DataSource } from "typeorm";
import { TestCategory } from "./entities/TestCategory";
import { Users } from "./entities/Users";
import { Question } from "./entities/Question";
import { Words } from "./entities/Words";
import { Subjects } from "./entities/mapping";
import { WordAnswer } from "./entities/WordAnswer";
import { Answer } from "./entities/Answer";
import { TestHistory } from "./entities/TestHistory";
import { UserLearning } from "./entities/UserLearning";
import { LearningHistory } from "./entities/LearningHistory";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "",
  port: 1433,
  username: "",
  password: "",
  database: "",
  synchronize: false,
  logging: true,
  entities: [
    Question,
    TestCategory,
    Users,
    Words,
    Subjects,
    WordAnswer,
    Answer,
    TestHistory,
    UserLearning,
    LearningHistory,
  ],
});
