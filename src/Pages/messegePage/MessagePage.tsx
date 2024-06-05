import MessageSidebar from "../../components/sidebar/Sidebar";
import Chat from "../../components/chat/Chat";
import React from "react"

const MessagePage = () => {
  return (
    <div className="bg-blue-100 flex items-center justify-center h-screen">
      <div className="w-4/5 mx-auto corner border-2 h-4/5 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        <MessageSidebar />
        <Chat />
      </div>
    </div>
  );
};

export default MessagePage;
