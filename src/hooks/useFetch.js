import axios from "axios";
import React, { useEffect, useState } from "react";
import { RefreshTokenRoute } from "../utils/APIendpoints";
import jwt_decode from "jwt-decode";
import { axiosJWT } from "../utils/axiosInstance";

const UseFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  axiosJWT.defaults.withCredentials = true;
  axiosJWT.defaults.headers.common["authorization"] = "Bearer " + accessToken;

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const res = await axiosJWT.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
        console.log(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
