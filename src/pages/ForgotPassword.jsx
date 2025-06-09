import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/forgot-password", { email })
      .then((res) => {
        if (res.data.status) {
          alert("Check your email for reset password link.");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-grow flex items-center justify-center bg-white dark:bg-[#0b1120] px-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full max-w-sm bg-white dark:bg-[#1a1a2e] p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 text-center">
            Forgot Password
          </h2>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium mb-1 text-green-900 dark:text-green-100">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded transition duration-300"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
