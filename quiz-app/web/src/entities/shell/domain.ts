import { QuestionId, QuizId, UserId } from "@/shared";

export type Quiz =
  | QuizIdleEntity
  | QuizProgressEntity
  | QuizFinishedEntity
  | QuizInterruptedEntity;

type QuizIdleEntity = {
  id: QuizId;
  title: string;
  participantsCount: number;
  creator: UserEntity;
  type: "idle";
};

type QuizProgressEntity = {
  id: QuizId;
  title: string;
  questions: QuestionEntity[];
  headerTitle: string;
  type: "in progress";
};

type QuizFinishedEntity = {
  id: QuizId;
  title: string;
  creator: UserEntity;
  result: QuestionResult[];
  overallScore: number;
  type: "finished";
};

type QuizInterruptedEntity = {
  id: QuizId;
  title: string;
  creator: UserEntity;
  progress: number;
  type: "interrupted";
};

type QuestionResult = {
  id: number;
  questionId: QuestionId;
  questionTitle: string;
  score: number;
};

type UserEntity = {
  id: UserId;
  name: string;
};

type QuestionEntity = {
  id: QuestionId;
  title: string;
};