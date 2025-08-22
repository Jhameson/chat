import { useState } from "react";

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
    <div className="bg-gray-700 w-full relative flex flex-col items-center h-screen">
      <div className="border border-gray-400 w-[90%] h-[85%] flex flex-col gap-3 p-3 rounded-md mt-4 overflow-y-scroll">
        {messages.map((value, index) => (
          <div
            key={index}
            className={`p-3 max-w-[70%] rounded-2xl ${
              value.role === "GPT_QUE_SO_DIZ_A_HORA"
                ? "bg-gray-200 text-black self-start"
                : "bg-blue-500 text-white self-end"
            }`}
          >
            {value.text}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full h-[80px] flex items-center justify-center bg-gray-700">
        <input
          type="text"
          placeholder="Digite sua pergunta..."
          className="border border-gray-300 p-4 w-[70%] rounded-3xl outline-none text-white bg-gray-800 shadow-md focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-4 ml-2 rounded-3xl hover:bg-blue-600 transition"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
