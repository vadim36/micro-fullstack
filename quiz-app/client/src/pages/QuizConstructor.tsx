import { Label, Input, Card, Button, Select, SelectTrigger, SelectValue } from "@/shared";

export function QuizConstructor() {
  return <div className="p-2">
    <Card className="p-2">
      <Label>Please give a title for your new quiz</Label>
      <Input placeholder="Untitled Quiz"/>
    </Card>
    <section className="mt-2">
      <h3 className="font-semibold text-xl">1 Question:</h3>
      <Button>Add a Question</Button>
      <ul>
        <QuestionCard/>
      </ul>
    </section>
  </div>
}

function QuestionCard() {
  return <li>
    <Card className="p-2">
      <button>drag</button>
      <strong>Type of question</strong>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a passing time" />
        </SelectTrigger>
      </Select>
      <Label>Define the point's count</Label>
      <Input type="number" min="0"/>
      <Button>copy</Button>
      <Button>edit</Button>
      <Button>delete</Button>
    </Card>
  </li> 
}