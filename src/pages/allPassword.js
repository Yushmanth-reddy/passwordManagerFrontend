import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CardComponent from "../components/cards";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { getAllPasswordRoute } from "../utils/APIendpoints";
import UseFetch from "../hooks/useFetch";

const AllPasswords = (props) => {
  const accessToken = localStorage.getItem("accessToken");
  const { privateKey } = props;
  const [Passwords, setPasswords] = useState([]);
  const [errors, setErrors] = useState();
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["authorization"] = "Bearer " + accessToken;

  const { data, loading, error } = UseFetch(getAllPasswordRoute);

  return (
    <>
      <>
        {error ? (
          <h1 className="loading">Error in fetching the passwords</h1>
        ) : (
          <div className="bg-white">
            <div className="flex justify-center">
              <Navbar className="" />
            </div>
            {loading ? (
              <h1 className="loading">Loading....</h1>
            ) : (
              <>
                <div className="mt-8 p-16 grid grid-rows-3 grid-flow-row gap-16">
                  {data.map((pass, i) => {
                    return (
                      <CardComponent
                        key={i}
                        passwordDetailes={pass}
                        privateKey={privateKey}
                      />
                    );
                  })}
                </div>
              </>
            )}

            <div>
              <Link
                class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl duration-300"
                to="/addPassword"
              >
                {" "}
                +
              </Link>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default AllPasswords;
