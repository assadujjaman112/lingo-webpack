import React from "react"
import { IoIosPersonAdd } from "@react-icons/all-files/io/IoIosPersonAdd";
import { FaVideo } from "@react-icons/all-files/fa/FaVideo";
import { HiOutlineDotsHorizontal } from "@react-icons/all-files/hi/HiOutlineDotsHorizontal";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../../providers/ChatContext";

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className="col-span-2">
      <div className="bg-[#875b95] h-16 text-gray-100 p-4 flex items-center justify-between ">
        <span>{data.user?.displayName}</span>
        <div className="flex items-center gap-5">
          <FaVideo />
          <IoIosPersonAdd />
          <HiOutlineDotsHorizontal />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
};

export default Chat;
