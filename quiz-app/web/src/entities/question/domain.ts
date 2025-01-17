import { AnswerId, QuestionId } from "@/shared";

export type QuestionEntity = QuestionQuizEntity | QuestionSurveyEntity;

type QuestionQuizEntity = {
  id: QuestionId;
  title: string;
  answersType: string;
  answers: AnswerEntity[];
  correctAnswers: AnswerEntity[];
  score: number;
};

type QuestionSurveyEntity = {
  id: QuestionId;
  title: string;
  answersType: string;
  answers: AnswerEntity[];
};

type AnswerEntity = {
  id: AnswerId;
  name: string;
};
