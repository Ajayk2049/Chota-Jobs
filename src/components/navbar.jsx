import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/cjLogo3.png";
import { Menu, X} from "lucide-react";
import ThemeToggle from "./themeToggle"
export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 shadow-md bg-[rgb(var(--background))] text-[rgb(var(--text))]">
      <div className="flex justify-between items-center px-4 py-2">
        {/* brand logo */}
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="brand_logo"
              className="w-full h-15 md:w-[150px] md:h-[70px] rounded-3xl p-2 shadow-2xl"
            />
          </Link>
        </div>

        {/* buttons for menu */}

        <div className="md:hidden flex items-center justify-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setVisible(!visible)}
            className="p-2 focus:outline-none"
          >
            {visible ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex text-lg font-mono gap-6 p-2 items-center">
          <Link
            to="home-jobs"
            className="hover:text-blue-600 md:hover:underline md:hover:decoration-blue-400 md:hover:underline-offset-8 transition-all duration-200"
          >
            Home Jobs
          </Link>
          <Link
            to="regular-jobs"
            className="hover:text-blue-600 md:hover:underline md:hover:decoration-blue-400 md:hover:underline-offset-8 transition-all duration-200"
          >
            Regular Jobs
          </Link>
          <Link
            to="about-us"
            className="hover:text-blue-600 md:hover:underline md:hover:decoration-blue-400 md:hover:underline-offset-8 transition-all duration-200"
          >
            About Us
          </Link>
          <Link
            to="contact"
            className="hover:text-blue-600 md:hover:underline md:hover:decoration-blue-400 md:hover:underline-offset-8 transition-all duration-200"
          >
            Contact
          </Link>
          <ThemeToggle />
          <Link to="login">
            <button className="border border-blue-600 text-blue-600 rounded-md px-4 py-1.5 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-md">
              Login
            </button>
          </Link>
          <Link to="signup">
            <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition-all duration-200 shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      {/* mobile menu */}
      {visible && (
        <div className="md:hidden w-full bg-blue-400 flex flex-col items-center space-y-2 p-4 shadow-lg">
          <Link
            to="home-jobs"
            className="w-full text-center p-2 hover:bg-blue-200 text-white font-mono text-lg transition-all duration-200"
            onClick={() => setVisible(false)}
          >
            Home Jobs
          </Link>
          <Link
            to="regular-jobs"
            className="w-full text-center p-2 hover:bg-blue-200 text-white font-mono text-lg transition-all duration-200"
            onClick={() => setVisible(false)}
          >
            Regular Jobs
          </Link>
          <Link
            to="about-us"
            className="w-full text-center p-2 hover:bg-blue-200 text-white font-mono text-lg transition-all duration-200"
            onClick={() => setVisible(false)}
          >
            About Us
          </Link>
          <Link
            to="contact"
            className="w-full text-center p-2 hover:bg-blue-200 text-white font-mono text-lg transition-all duration-200"
            onClick={() => setVisible(false)}
          >
            Contact
          </Link>
          <Link
            to="login"
            className="w-full text-center p-2 hover:bg-blue-200 text-white font-mono text-lg transition-all duration-200"
            onClick={() => setVisible(false)}
          >
            Login
          </Link>
          <Link
            to="signup"
            className="w-full text-center p-2 hover:bg-blue-200 text-white font-mono text-lg transition-all duration-200"
            onClick={() => setVisible(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
