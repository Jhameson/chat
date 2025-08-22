import { useState } from "react";

export const Sidebar = () => {
  const [chats, setChats] = useState<string[]>([
    "Exemplo de chat",
    "Entrevista React",
    "Treino técnico",
    "Treino técnico",
  ]);

  const addChat = () => {
    const newChat = `Novo Chat ${chats.length + 1}`;
    setChats([newChat, ...chats]);
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-[350px] flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-lg font-bold text-center">CHAT do Paraguai</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">Chats</span>
          <button
            onClick={addChat}
            className="rounded-full bg-amber-600 w-6 h-6 flex items-center justify-center text-white hover:bg-amber-500 transition"
          >
            +
          </button>
        </div>

        <div className="space-y-2">
          {chats.map((chat, index) => (
            <div
              key={index}
              className="border border-gray-600 cursor-pointer rounded-md p-2 hover:bg-gray-700 transition"
              onClick={() => {}}
            >
              <span>{chat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-gray-700">
        <button
          className="w-full bg-gray-700 p-2 rounded-md hover:bg-gray-600 transition"
          onClick={() => {
            alert("Esse botão não faz nada :)");
          }}
        >
          Configurações
        </button>
      </div>
    </div>
  );
};
