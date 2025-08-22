import { useState } from "react";
import Chevron from "../assets/chevron.svg";

export interface IMessage {
  role: "USER" | "GPT_QUE_SO_DIZ_A_HORA" | "user";
  text: string;
}

interface ChatContainerProps {
  messages: IMessage[];
  setMessages: (msgs: IMessage[]) => void;
}

export const ChatContainer = ({
  messages,
  setMessages,
}: ChatContainerProps) => {
  const [question, setQuestion] = useState<string>("");

  const handleSend = () => {
    if (!question.trim()) return;

    const newMessages: IMessage[] = [
      ...messages,
      { role: "user", text: question },
    ];
    setMessages(newMessages);

    setTimeout(() => {
      const botMessage: IMessage = {
        role: "GPT_QUE_SO_DIZ_A_HORA",
        text: `Oi! Sobre sua pergunta: "${question}", aqui está uma resposta. Se quiser saber mais, só perguntar! \n (${new Date().toLocaleTimeString()})`,
      };
      setMessages([...newMessages, botMessage]);
    }, 700);

    setQuestion("");
  };

  return (
    <div className="bg-[#1B1C1D] w-full relative flex flex-col items-center px-2 py-6 overflow-hidden">
      <button
        className="bg-[#232425] px-2 py-1 rounded-3xl absolute left-3 top-2 text-gray-100 flex items-center gap-2 hover:bg-gray-700"
        onClick={() => {
          alert("Me contrate e tenha acesso a outras versões");
        }}
      >
        Jhameson GPT26
        <img src={Chevron} alt="Abrir menu" className="w-5 h-5 color-white" />
        {/* </span> */}
      </button>

      <div className="border border-gray-700 w-[85%] flex-1 flex flex-col gap-3 p-4 overflow-hidden rounded-xl mt-5 overflow-y-scroll custom-scroll shadow-lg backdrop-blur-md">
        {messages.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
            <span className="text-2xl mb-2">Nenhuma mensagem ainda</span>
            <span className="text-sm">Faça uma pergunta para começar</span>
          </div>
        )}
        {messages.map((value, index) => (
          <div
            key={index}
            className={`px-4 py-3 max-w-[70%] rounded-2xl text-base break-words shadow-md transition-all duration-200 animate-fade-in flex flex-col
              ${
                value.role === "GPT_QUE_SO_DIZ_A_HORA"
                  ? "bg-gray-600 text-white self-start items-start"
                  : "bg-gray-500 text-white self-end items-end"
              }
            `}
          >
            {value.text}
          </div>
        ))}
      </div>

      <form
        className="w-full max-w-[800px] flex items-center gap-2 mt-6 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          type="text"
          placeholder="Digite sua pergunta..."
          className="border border-gray-500 p-5 w-full rounded-3xl outline-none text-white bg-transparent shadow-lg focus:ring-2 focus:ring-amber-900 transition-all duration-200 placeholder:text-gray-400"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-amber-600 text-white px-6 py-3 rounded-3xl hover:bg-amber-700 transition font-semibold shadow-md cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
