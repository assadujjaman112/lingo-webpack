import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
import React from "react";

const MessageSidebar = () => {
  return (
  <div className="col-span-1 bg-[#734980] ">
    <Navbar />
    <Search />
    <Chats />

    </div>
);
};

export default MessageSidebar;
