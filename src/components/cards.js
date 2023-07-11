import axios from "axios";
import React, { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { PrivateKeyContext } from "../context/privateKeyContext";
import { axiosJWT } from "../utils/axiosInstance";
import { decryptPasswordRoute } from "../utils/APIendpoints";
export default function CardComponent(props) {
  const {
    email,
    password,
    siteTitle,
    userName,
    websiteURL,
    _id: id,
  } = props.passwordDetailes;
  const { setErrors, iferror } = props;
  const { privateKey } = useContext(PrivateKeyContext);
  const accessToken = localStorage.getItem("accessToken");
  const [Password, setPassword] = useState("***********");
  const reqData = { privateKey };
  const Navigate = useNavigate();
  const [hide, setHide] = useState(true);
  axiosJWT.defaults.withCredentials = true;
  axiosJWT.defaults.headers.common["authorization"] = "Bearer " + accessToken;

  const handleViewPass = async (passId) => {
    try {
      const { data } = await axiosJWT.post(
        `${decryptPasswordRoute}/${passId}`,
        reqData
      );
      setPassword(data.password);
      setHide(!hide);
    } catch (err) {
      iferror(err.response.data.message);
    }
  };

  const handleEditPass = (passId) => {
    Navigate(`/editPassword?id=${passId}`);
  };

  return (
    <>
      <div className="rounded-lg shadow-md lg:max-w-sm" id={id}>
        <div className="p-8 w-full">
          <div className="flex mb-4">
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2 mt-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            <h4 className=" ml-2 text-xl font-semibold tracking-tight text-blue-600">
              {siteTitle}
            </h4>
          </div>
          <a
            class="mt-8 mb-5 text-gray-700 text-base websiteURL"
            href={`https://${websiteURL}`}
            target="_blank"
          >
            Site URL: {websiteURL}
          </a>
          <p class=" text-gray-700 text-base">Username : {userName}</p>
          <p class="mb-4 text-gray-700 text-base">
            Password : {hide ? " **********" : Password}
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => {
                handleEditPass(id);
              }}
              className="px-4 py-2 mr-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
            >
              Edit Password
            </button>

            <button
              onClick={() => {
                handleViewPass(id);
              }}
              className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
            >
              {hide ? "View Password" : "Hide Password"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
