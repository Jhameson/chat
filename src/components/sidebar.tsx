import { useState } from "react";
import SquarePen from "../assets/square-pen.svg";

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
    <div className="bg-[#282A2C] text-white h-screen w-[350px] flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-lg font-bold text-center">CHAT do Paraguai</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">Chats</span>
          <button
            onClick={addChat}
            className="rounded-full bg-amber-600 w-9 h-9 flex items-center justify-center text-white hover:bg-amber-700 transition"
          >
            <img
              src={SquarePen}
              alt="Adicionar chat"
              className="w-5 h-5 color-white"
            />
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
          className="w-full bg-amber-600 p-2 rounded-md hover:bg-amber-700 transition"
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
