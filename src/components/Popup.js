import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateKeyContext } from "../context/privateKeyContext";
export default function Modal({ setShowModal, showModal }) {
  const { privateKey } = useContext(PrivateKeyContext);
  // const accessToken = localStorage.getItem("access");
  const navigate = useNavigate();

  const handleCont = () => {
    setShowModal(false);
    navigate("/home");
    console.log(showModal);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className=" flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl">Your Private Key</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="my-4 text-slate-500 text-lg leading-relaxed">
                Your Private Key is
                <p id="privatekeyPopup">{privateKey}</p>
                <br />
                <p>
                  Store this private key to access your stored passwords. This
                  private key can't be recovered later on so we suggest you to
                  store it somewhere safe.
                </p>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleCont}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
