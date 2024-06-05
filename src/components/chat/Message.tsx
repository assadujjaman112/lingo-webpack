import React, { useContext } from "react";
import { ChatContext } from "../../providers/ChatContext";
import { useEffect, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    //@ts-ignore
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
    //@ts-ignore
      ref={ref}
      className={`flex gap-5 mb-5 , message ${
        message.senderId === currentUser.uid && "owner flex flex-row-reverse"
      }`}
    >
      <div className="flex flex-col text-[#80808080]">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-10 h-10 circle object-cover"
        />
        <span className="text-xs">just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-3">
        <p
          className={` ${
            message.senderId === currentUser.uid
              ? "owner bg-blue-700 rounded-[10px, 5px] text-white py-1 px-2"
              : "bg-white messageP px-5 py-2"
          }`}
        >
          {message.text}
        </p>
        <img src="" alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default Message;
