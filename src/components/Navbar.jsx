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
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">🌿 PlantPulse</h1>

        {/* Combined Right Section (Desktop Nav + Toggle) */}
        <div className="flex items-center space-x-4">
          {/* Desktop Nav */}
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

          {/* Always Visible: Theme toggle + Mobile menu button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-yellow-300 transition-colors"
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
            title="Toggle Menu"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
