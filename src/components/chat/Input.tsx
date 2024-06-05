
import { db } from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import { ChatContext } from "../../providers/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const Input = () => {
  const [text, setText] = useState("");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };
  return (
    <div className=" h-14 bg-white p-4 flex justify-between items-center ">
      <input
        type="text"
        name=""
        id=""
        className="w-full outline-none border-none placeholder:text-gray-400"
        placeholder="Write a message..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div>
        <button
          onClick={handleSend}
          className="px-3 py-1 bg-[#583862] text-white corner text-xs"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
