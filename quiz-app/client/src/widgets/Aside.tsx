import { Link } from "react-router-dom";
import { Button } from "@/shared";

export function Aside() {
  return <aside className="border-r-4 flex flex-col items-center p-3 gap-2">
    <Link to="/">
      <h2 className="font-semibold text-3xl">Quizes App</h2>
    </Link>
    <h3 className="text-xl">Your Quizes(1):</h3>
    <Link to="/constructor"><Button>Create new</Button></Link>
    <ul className="flex-1">
      <QuizListItem/>
    </ul>
    <div className="flex flex-col gap-1">
      <Button>Account</Button>
      <Button>Logout</Button>
    </div>
  </aside>
}

function QuizListItem() {
  return <Link to="/:quiz">
    <li className="p-2 flex gap-2 items-center border rounded-sm">
      <Button>Pin</Button>
      <strong>Quiz Title</strong>
    </li>
  </Link>
}