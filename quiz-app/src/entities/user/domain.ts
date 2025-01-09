type User = {
  id: string,
  name: string,
  email: string,
  password: string
  createdQuizes: Quiz[],
  passedQuizes: Quiz[]
}

type Quiz = {
  id: string,
  name: string
}