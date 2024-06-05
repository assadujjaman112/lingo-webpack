import { db } from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const res = await createUser(email, password)
    console.log(res.user)
    
        await updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });
        navigate("/");

    // create user on firestore
    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      displayName: res.user.displayName,
      email,
      photoURL: res.user.photoURL,
    });

    //create empty user chats on firestore
    await setDoc(doc(db, "userChats", res.user.uid), {});
  };

  return (
    <div className="bg-green-200 h-screen flex items-center">
      <div className="w-4/5 lg:w-1/2 mx-auto p-7 corner bg-white">
        <form onSubmit={handleRegister}>
          <h1 className="text-2xl lg:text-4xl font-bold text-center my-5">
            Register now!!
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            id=""
            className="bg-green-200 pl-5 py-2 w-full corner mt-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="bg-green-200 pl-5 py-2 w-full corner mt-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="bg-green-200 pl-5 py-2 w-full corner mt-2"
          />
          <input
            type="text"
            name="photo"
            placeholder="Enter Your Photo URL"
            className="bg-green-200 pl-5 py-2 w-full corner mt-2"
          />
          <input
            type="submit"
            value="Register"
            className="btn w-full corner bg-slate-200 py-2 mt-6 hover:bg-slate-300 hover:cursor-pointer border-b-4 border-slate-400 active:border-b-0"
          />
          <p className="mt-8">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
