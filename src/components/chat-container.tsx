import { useState } from "react";
import Chevron from "../assets/chevron.svg";

interface IMessage {
  role: "USER" | "GPT_QUE_SO_DIZ_A_HORA";
  text: string;
}

export const ChatContainer = () => {
  const [question, setQuestion] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSend = () => {
    if (!question.trim()) return;

    const newMessages = [...messages, { role: "user", text: question }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "GPT_QUE_SO_DIZ_A_HORA",
          text: `Resposta para: "${question}" \n São exatamente: ${new Date()}`,
        },
      ]);
    }, 500);

    setQuestion("");
  };

  return (
    <div className="bg-[#1B1C1D] w-full relative flex flex-col items-center px-2 py-6 overflow-hidden">
      <button
        className="bg-[#232425] p-1 rounded-3xl absolute left-3 top-2 text-gray-100 flex items-center gap-2 hover:bg-gray-700"
        onClick={() => {
          alert("Me contrate e tenha acesso a outras versões");
        }}
      >
        Jhameson GPT26
        <img
          src={Chevron}
          alt="Adicionar chat"
          className="w-5 h-5 color-white"
        />
        {/* </span> */}
      </button>

      <div className="border border-gray-700 w-[85%] flex-1 flex flex-col gap-3 p-4 overflow-hidden rounded-xl mt-5 overflow-y-scroll custom-scroll shadow-lg backdrop-blur-md">
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
