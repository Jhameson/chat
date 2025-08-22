import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar";

interface IAnswers {
  answer: string;
}

function App() {
  const [questions, setQuestions] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  console.log(answers);

  return (
    <div className="w-full flex">
      <Sidebar />
      {/* container */}
      <div className="bg-gray-700 w-full relative flex flex-col  items-center">
        <div className="border border-gray-400 w-[80%] h-[85%] flex flex-col gap-1">
          {answers.map((value, index) => {
            return (
              // <div className="">
              <div className="bg-gray-100 rounded-4xl p-3 flex justify-end min-w-1"></div>
              //   <div className="bg-gray-100 rounded-4xl p-3 flex justify-end min-w-1">
              //     teste
              //   </div>
              // </div>
            );
          })}
        </div>
        <div className="absolute  bottom-0 w-full h-[80px] flex items-center justify-center">
          <input
            placeholder="Digite aqui..."
            className="border border-gray-300 p-4 w-[80%] rounded-4xl"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-4 ml-2 rounded-4xl"
            onClick={() => {
              alert(questions);
              setQuestions("");
              setAnswers([...answers, questions]);
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
