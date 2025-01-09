export type QuizSettingsEntity = {
  passingMode: QuizPassingModeType,
  sharingMode: QuizSharingModeType,
} & Partial<{
  isQuestionsShuffled: boolean,
  passingTimeStart: number,
  passingDeadline: number,
  passindDuration: number,
  isScreenRecords: boolean,
  isKeyboardRecords: boolean,
  isScoreShownAfterSubmit: boolean
}>

export type QuizPassingModeType = "classic" | "focused"
export type QuizSharingModeType = "public" | "private"	

export type HeaderUIStylesEntity = {
  fontSize: number,
  backgroundColor: string,
  logoImage?: string
}

export type QuizUISettingsEntity = Partial<{
  questionsFontSize: number,
  textFontSize: number,
  backgroundColor: string
}>

export type QuestionStylesEntity = {
  isBold: boolean,
  isItalic: boolean,
  isCrossed: boolean,
  isCode: boolean,
  isQuote: boolean,
}