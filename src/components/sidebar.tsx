import SquarePen from "../assets/square-pen.svg";
import Trash from "../assets/trash.svg";

interface Chat {
  id: string;
  name: string;
}

interface SidebarProps {
  chats: Chat[] | [];
  activeChatId: string;
  onAddChat: () => void;
  onSelectChat: (id: string) => void;
  onDeleteChat?: (id: string) => void;
}

export const Sidebar = ({
  chats,
  activeChatId,
  onAddChat,
  onSelectChat,
  onDeleteChat,
}: SidebarProps) => {
  return (
    <div className="bg-[#282A2C] text-white h-screen w-[350px] flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-lg font-bold text-center">CHAT do Paraguai</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">Chats</span>
          <button
            onClick={onAddChat}
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
          {chats &&
            chats.map((chat) => (
              <div
                key={chat.id}
                className={`border-gray-600 hover:bg-gray-700 flex justify-between items-center rounded-md p-2 border transition ${
                  chat.id === activeChatId ? "bg-gray-700" : ""
                }`}
              >
                <div
                  className={`cursor-pointer flex-1 ${
                    chat.id === activeChatId ? "bg-gray-700" : ""
                  }`}
                  onClick={() => onSelectChat(chat.id)}
                >
                  <span>{chat.name}</span>
                </div>
                <button onClick={() => onDeleteChat && onDeleteChat(chat.id)}>
                  <img
                    src={Trash}
                    alt="Adicionar chat"
                    className="w-4 h-4 color-white"
                  />
                </button>
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
