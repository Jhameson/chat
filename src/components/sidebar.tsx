export const Sidebar = () => {
  return (
    <div className="bg-gray-500 h-full h-screen w-[300px]">
      <div>
        <h1>Chat Entrevista</h1>
      </div>
      <div className="mt-5 bg-amber-400 p-2">
        <div className="flex items-center justify-between mb-4">
          <span>Chats</span>
          <button className="rounded-full bg-amber-600 w-[20px] h-[20px] flex items-center justify-center text-white ml-2">
            I
          </button>
        </div>
        <div
          className="border border-gray-400 cursor-pointer rounded-sm p-2"
          onClick={() => {}}
        >
          <span>Exemplo de chat</span>
        </div>
      </div>
    </div>
  );
};
