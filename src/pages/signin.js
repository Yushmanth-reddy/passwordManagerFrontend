import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  const URL = "http://localhost:3300";
  const [user, setUser] = useState({ email: "", password: "" });
  const [tokens, setTokens] = useState({});
  const [isTokenPresent, setIsTokenPresent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSignin = () => {
    axios
      .post(`${URL}/auth/signin`, user)
      .then((response) => {
        if (Object.keys(response.data).length === 2) {
          setTokens(response.data);
          setIsTokenPresent(true);
          sessionStorage.setItem("access", response.data.accessToken);
          navigate("/privateKey");
        } else {
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsTokenPresent(false);
      });
  };

  return (
    <>
      <main className="bg-white flex flex-col items-center justify-center min-h-screen w-full text-center px-20 ">
        <div className="rounded-2xl flex w-2/3 max-w-4xl">
          <div className=" bg-slate-400 w-3/5 p-5 rounded-tl-2xl rounded-bl-2xl ">
            <div className="py-10">
              <h1 className="text-3xl font-bold mb-2 ">Login</h1>
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                id="large-input1"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                name="password"
                value={user.password}
                onChange={handleChange}
                type="password"
                id="large-input2"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button onClick={handleSignin}>
              <Link
                // to="/"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Sign In
              </Link>
            </button>

            <p className="text-lg mb-4 mt-6"> Not an User? SignUp instead!</p>
            <Link
              // href="/signup"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </Link>
          </div>
          <div className=" bg-red-200 w-3/5 p-5 rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h1 className="text-3xl font-bold mb-2 text-black">Hey There!</h1>
            <div className="border-2 w-24 border-green-500 inline-block mb-2 "></div>
            <p className="text-lg mb-8 text-black ">
              Say goodbye to forgotten passwords and hello to secure, easy login
              with our password manager.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
