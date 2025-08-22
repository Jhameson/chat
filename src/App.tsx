import "./App.css";
import { useState } from "react";
import { ChatContainer } from "./components/chat-container";
import { Sidebar } from "./components/sidebar";
import type { IMessage } from "./components/chat-container";

interface ChatGroup {
  id: string;
  name: string;
}

function App() {
  const [chats, setChats] = useState<ChatGroup[]>([]);
  const [activeChatId, setActiveChatId] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Record<string, IMessage[]>>(
    {}
  );

  const addChat = () => {
    const newId = (Date.now() + Math.random() * 100).toFixed().toString();
    const newChat = { id: newId, name: `Novo Chat ${chats.length + 1}` };
    setChats([newChat, ...chats]);
    setActiveChatId(newId);
  };

  const selectChat = (id: string) => {
    setActiveChatId(id);
  };

  const messages = chatMessages[activeChatId] || [];

  const setMessages = (msgs: IMessage[]) => {
    setChatMessages((prev) => ({ ...prev, [activeChatId]: msgs }));
  };

  const handleDeleteChat = (id: string) => {
    setChats((prev) => {
      const filtered = prev.filter((chat) => chat.id !== id);
      if (activeChatId === id) {
        setActiveChatId(filtered.length ? filtered[0].id : "");
      }
      return filtered;
    });
    setChatMessages((prev) => {
      const { [id]: deleted, ...rest } = prev;
      return rest;
    });
  };

  console.log(chatMessages);

  return (
    <div className="w-full flex h-screen relative">
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onAddChat={addChat}
        onSelectChat={selectChat}
        onDeleteChat={handleDeleteChat}
      />
      <ChatContainer messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
