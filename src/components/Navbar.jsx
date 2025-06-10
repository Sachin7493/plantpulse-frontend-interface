import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsLoggedIn(auth === "true");
    setMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    Axios.get(`${backend_url}/auth/logout`)
      .then(() => {
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((err) => {
        console.log("Logout failed", err);
      });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-600 text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center relative">
        <div className="flex justify-center items-center gap-4 w-full">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            🌿 PlantPulse
          </h1>
          <span className="text-orange-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
            ॐ श्री हनुमते नमः
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="hover:text-green-200 hover:shadow">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-200 hover:shadow">
              About
            </Link>
            <Link to="/contact" className="hover:text-green-200 hover:shadow">
              Contact
            </Link>
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="hover:text-green-200 hover:shadow">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:text-green-200 hover:shadow"
                >
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="hover:text-green-200 hover:shadow"
              >
                Logout
              </button>
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-yellow-300 transition-colors"
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
            title="Toggle Menu"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <Link
            to="/"
            className="hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="hover:text-green-200"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-green-200"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-green-200 text-left"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
