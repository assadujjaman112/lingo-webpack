import React, { useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUserName("");
  };

  return (
    <div className="border-b border-b-[#808080]">
      <div className="search-form">
        <input
          type="text"
          name=""
          onKeyDown={handleKey}
          id=""
          className="bg-transparent text-white outline-none border-none py-2 px-5 placeholder:text-slate-100 placeholder:text-xs"
          placeholder="Search a User..."
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      {err && <p>User not found!!</p>}
      {user && (
        <div
          onClick={handleSelect}
          className="flex cursor-pointer items-center px-5 py-2 text-gray-300"
        >
          <img src={user?.photoURL} alt="" className="w-12 h-12 circle mr-4" />
          <div>
            <span className="text-xs">{user?.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
