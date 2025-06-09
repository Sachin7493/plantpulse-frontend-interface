import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem("auth", "true");
          navigate("/");
        } else {
          alert(response.data.message || "Email or password is incorrect");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-white dark:bg-[#0b1120] px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white dark:bg-[#1a1a2e] p-6 rounded-lg shadow-md border"
        >
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 text-center">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-green-900 dark:text-green-100">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1 text-green-900 dark:text-green-100">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePassword}
              className="absolute right-3 top-9 cursor-pointer text-sm text-gray-500 hover:text-green-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded transition duration-300">
            Login
          </button>

          <div className="mt-4 text-sm text-center">
            <a
              href="/forgotPassword"
              className="text-purple-700 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-2 text-sm text-center">
            Don't have an Account?{" "}
            <a href="/signup" className="text-purple-700 hover:underline">
              Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
