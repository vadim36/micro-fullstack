import { QuestionStylesEntity } from "./settings"

export type QuestionEntity = {
  id: string,
  name: string,
  require: boolean,
  answersType: AnswersType,
  answers: AnswerEntity[],
  correctAnswers: AnswerEntity[],
  image?: string,
  score: number,
  isAnswersShuffed?: boolean,
  lasting?: number
  styles: QuestionStylesEntity
}

type AnswerEntity = {
  id: string,
  name: string
}

enum AnswersType {
  MULTIPLE_CHOICE = "multiple_choice",
  ONE_CHOICE = "one_choice",
  DROPDOWN = "dropdown",
  TEXT = "text"
}