import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };
  isActive
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="fixed flex flex-col items-end w-full md:static">
      <div
        className={`w-full flex justify-end pt-8 pr-8 md:hidden fold:pr-4 ${
          isActive ? "bg-black" : ""
        }`}
      >
        <button
          onClick={handleClick}
          className="md:hidden"
          data-testid="hamburgerMenu"
        >
          {isActive ? (
            <AiOutlineClose
              size={32}
              className="fill-white"
              data-testid="hamburgerClose"
            />
          ) : (
            <AiOutlineMenu
              size={32}
              className="fill-white"
              data-testid="hamburgerOpen"
            />
          )}
        </button>
      </div>
      <ul
        className={`hamburger-list flex flex-col items-end w-full text-grey uppercase pr-8 fold:pr-4 fold:text-4xl md:px-4 ${
          isActive
            ? "h-hamburgermenu text-5xl pt-24 gap-8 bg-black"
            : "hidden md:flex md:flex-row gap-4 uppercase"
        } `}
      >
        <li>
          <NavLink
            to="/"
            onClick={() => setIsActive(false)}
            data-testid="hamburgerLink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cards"
            onClick={() => setIsActive(false)}
            data-testid="hamburgerLink"
          >
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            onClick={() => setIsActive(false)}
            data-testid="hamburgerLink"
          >
            Community
          </NavLink>
        </li>
        <li className="md:ml-auto md:mr-4">
          <NavLink
            to="/login"
            className="flex items-center"
            onClick={() => setIsActive(false)}
            data-testid="hamburgerLink"
          >
            <span className="md:pr-4">Login</span>
            <FaUserCircle size={24} className="hidden md:block" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
