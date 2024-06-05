import { AuthContext } from "../../providers/AuthProvider";
import React, { useContext } from "react";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-row-reverse bg-[#583862] items-center justify-between h-16 p-4 text-slate-100">
      <div>
        <img
          src={currentUser?.photoURL}
          alt=""
          className="bg-white w-7 h-7 object-cover circle"
        />
      </div>
      <span>{currentUser?.displayName}</span>
    </div>
  );
};

export default Navbar;
