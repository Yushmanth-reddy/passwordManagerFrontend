import jwt_decode from "jwt-decode";
import { RefreshTokenRoute } from "./APIendpoints";
import axios from "axios";

export const axiosJWT = axios.create();

const newTokenGenerator = async () => {
  try {
    const { data } = await axios.post(RefreshTokenRoute);
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    } else {
      console.log("User unauthorised");
    }
  } catch (err) {
    console.log(err);
  }
};

axiosJWT.interceptors.request.use(
  async (config) => {
    let currentDate = new Date();
    // console.log(localStorage.getItem("accessToken"));
    const decodedToken = await jwt_decode(localStorage.getItem("accessToken"));
    // console.log(decodedToken.exp * 1000);
    // console.log(currentDate.getTime());
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      // console.log("inside if block");
      const data = await newTokenGenerator();
      config.headers["authorization"] =
        "Bearer " + localStorage.getItem("accessToken");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const toastOption = {
  position: "bottom-right",
  autoClose: 5000,
  pauseOnHover: true,
  draggable: true,
};
