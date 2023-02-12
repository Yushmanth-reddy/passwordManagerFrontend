import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const AddPassword = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar className="" />
      <form>
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
              type="address"
              id="address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Ex: passman.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="text"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 "
            >
              Site Title
            </label>
            <input
              type="text"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ex: PassMan"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="text"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 "
            >
              Username
            </label>
            <input
              type="text"
              id="text"
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
              <Link href="/allPasswords">Add</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddPassword;
