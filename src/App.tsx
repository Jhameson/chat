import "./App.css";
import { ChatContainer } from "./components/chat-container";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="w-full flex h-screen relative">
      <Sidebar />
      <ChatContainer />
    </div>
  );
}

export default App;
