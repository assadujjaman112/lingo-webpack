import { AuthContext } from "../../providers/AuthProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const {currentUser, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };

  return (
    <div className="space-y-2 min-w-[300px] font-semibold z-10 absolute right-1 xl:right-[8%] 2xl:right-[20%] px-8 py-10 bg-slate-100 mt-2 corner">
      <h1 className="hover:bg-gray-300 px-2 py-1 corner">
        Name : {currentUser?.displayName}{" "}
      </h1>
      <h1 className="hover:bg-gray-300 px-2 py-1 corner">Notifications</h1>
      <h1 className="hover:bg-gray-300 px-2 py-1 corner">Friends</h1>
      <Link to="/messages">
        <li className="hover:bg-gray-300 px-2 py-1 corner list-none">
          Messages
        </li>
      </Link>
      <div>
        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-[#583862] w-full text-white mt-5 corner "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
