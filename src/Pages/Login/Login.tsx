import { AuthContext } from "../../providers/AuthProvider";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;

    signIn(email, password)
    .then (result => {
      
      navigate("/");
    })
    .catch(error=> {
      console.error(error)
    })


  };

  return (
    <div className="bg-green-200 h-screen flex items-center">
      <div className="w-4/5 lg:w-1/2 mx-auto p-7 corner bg-white">
        <form onSubmit={handleLogin}>
          <h1 className="text-2xl lg:text-4xl font-bold text-center my-5">
            Login now!!
          </h1>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id=""
            className="bg-green-200 pl-5 py-2 w-full corner mt-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id=""
            className="bg-green-200 pl-5 py-2 w-full corner mt-2"
          />
         
          <input
            type="submit"
            value="Login"
            className="btn w-full corner bg-slate-200 py-2 mt-6 hover:bg-slate-300 hover:cursor-pointer border-b-4 border-slate-400 active:border-b-0"
          />
          <p className="mt-8">
            Do not have an account? <Link to="/signUp">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
