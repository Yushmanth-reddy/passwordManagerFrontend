import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const AddPassword = () => {
  const URL = "http://localhost:3300";
  const [passDetailes, setPassDetailes] = useState({});
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("access");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["authorization"] = "Bearer " + accessToken;

  const axiosJWT = axios.create();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassDetailes({
      ...passDetailes,
      [name]: value,
    });
  };

  const handleAddPassword = async (e) => {
    e.preventDefault();
    if (passDetailes.confirm_password === passDetailes.password) {
      await axiosJWT
        .post(`${URL}/pass/addPass`, passDetailes)
        .then((response) => {
          console.log(response.data);
          if (response.data.msg === "password stored") {
            navigate("/allPasswords");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Passwords not same");
    }
  };

  const newTokenGenerator = async () => {
    await axios
      .post(`${URL}/auth/refresh-token`)
      .then((response) => {
        const { accessToken } = response.data;
        if (!accessToken) {
          console.log("User unauthorised");
        } else {
          console.log(accessToken);
          sessionStorage.setItem("access", accessToken);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(sessionStorage.getItem("access"));
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await newTokenGenerator();
        config.headers["authorization"] =
          "Bearer " + sessionStorage.getItem("access");
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className="h-screen bg-white">
      <Navbar className="" />
      <form onSubmit={handleAddPassword}>
        <div
          className="bg-white p-8
        "
        >
          <div class=" mt-20 mb-6">
            <label
              for="email"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900"
            >
              Site address
            </label>
            <input
              type="text"
              id="email"
              name="websiteURL"
              value={passDetailes.websiteURL}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Ex: passman.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="Title"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 "
            >
              Site Title
            </label>
            <input
              type="text"
              id="Title"
              name="Title"
              value={passDetailes.Title}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ex: PassMan"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="username"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 "
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={passDetailes.username}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ex: Pass@Man"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={passDetailes.password}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 "
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={passDetailes.confirm_password}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div>

          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>

            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              I agree with the terms and conditions.
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white flex flex-col sm:text-center justify-end bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddPassword;
