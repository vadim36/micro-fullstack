import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Aside } from "./widgets/Aside";
import { QuizConstructor } from "./pages/QuizConstructor";

export function App() {
  return <div className="flex h-dvh ">
    <Aside/>
    <div className="flex-1">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/constructor" element={<QuizConstructor/>}/>
      </Routes>
    </div>
  </div>
}