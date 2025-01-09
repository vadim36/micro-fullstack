import { QuestionEntity } from "./question"
import { QuizSettingsEntity, QuizUISettingsEntity, HeaderUIStylesEntity } from "./settings"

export type QuizEntity = {
  id: string,
  title: string,
  questions: QuestionEntity[],
  creator: CreatorEntity,
  participantsCount: number,
  participants: ParticipantEntity[],
  setting: QuizSettingsEntity,
  UISettings: QuizUISettingsEntity,
  header: HeaderEntity
}

type CreatorEntity = {
  id: string,
  name: string 
}

type ParticipantEntity = {
  id: string,
  name: string
}

type HeaderEntity = {
  title: string,
  description?: string,
  timeDuration?: number,
  headerUIStyles: HeaderUIStylesEntity,
  image?: string
}