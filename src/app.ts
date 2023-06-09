import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import { TestCategory } from "./entities/TestCategory";
import { Users } from "./entities/Users";
import { Question } from "./entities/Question";
import { Words } from "./entities/Words";
import { DataSource } from "typeorm";

dotenv.config();
const app = require("express")();
console.log("Init");
console.log(process.env.PORT);
const port = process.env.PORT || 4000;

app.get("/", async (req: Request, res: Response) => {
  //const users = await AppDataSource.manager.find(Users);
  //console.log("Loaded users: ", users);
  const datasource = AppDataSource;
  var data = await getQuestionsByTypeAndSubjectId("en-vi", 1, datasource);
  res.send(data);
});
AppDataSource.initialize().then(async () => {
  console.log("Database connected.");
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});

// Route handler function
export async function getQuestionsByTypeAndSubjectId(
  type: string,
  subjectId: number,
  datasource: DataSource
) {
  if (type === "en-vi") {
    const questionRepository = datasource.getRepository(Question);
    const testCategoryRepository = datasource.getRepository(TestCategory);
    const wordRepository = datasource.getRepository(Words);

    const questionList = await questionRepository
      .createQueryBuilder("question")
      .innerJoinAndSelect("question.Word", "word")
      .innerJoin("question.TestCategory", "testCategory")
      .where("word.subject.ID = :subjectId", { subjectId })
      // .andWhere("testCategory.code = :type", { type })
      // .select([
      //   "question.id AS questionId",
      //   "word.id AS wordId",
      //   "word.name AS word",
      //   "answer.id AS answerId",
      //   "answer.answerText AS option",
      //   "answer.isCorrect",
      // ])
      .orderBy("RAND()")
      .getRawMany();

    // Map the questionList to the desired response format
    // const result = questionList.map((question) => ({
    //   questionId: question.Id,
    //   wordId: question.wordId,
    //   word: question.word.name,
    //   options: question.answers.map((answer) => ({
    //     option: answer.option,
    //     isCorrect: answer.isCorrect,
    //   })),
    // }));

    // return result;

    return questionList;
  }

  return null;
}
