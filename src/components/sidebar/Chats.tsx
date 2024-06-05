import { db } from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import { ChatContext } from "../../providers/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unSub = onSnapshot(
        doc(db, "userChats", currentUser?.uid),
        (doc) => {
          setChats(doc.data());
        }
      );

      return () => {
        unSub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);
  console.log(chats)
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      {Object?.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].data)
        .map((chat) => (
          <div
            className="col-span-2"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <div className="flex cursor-pointer items-center px-5 py-2 text-gray-300">
              <img
                src={chat[1].userInfo?.photoURL}
                alt=""
                className="w-12 h-12 circle mr-4"
              />
              <div>
                <span className="text-sm">{chat[1].userInfo.displayName}</span>
                <p className="text-xs">{chat[1].lastMessage?.text}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
