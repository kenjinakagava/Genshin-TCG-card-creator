import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Profile from "../Auth/Profile";

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
          className="md:hidden fixed"
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
        className={`hamburger-list flex flex-col items-end w-full text-grey uppercase pr-8 fold:pr-4 fold:text-4xl md:px-4 md:items-center ${
          isActive
            ? "h-screen text-5xl pt-24 gap-8 bg-black"
            : "hidden md:flex md:flex-row gap-4 uppercase"
        } `}
      >
        <li className="hamburger-link">
          <NavLink
            to="/"
            onClick={() => setIsActive(false)}
            data-testid="hamburgerLink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cards" onClick={() => setIsActive(false)}>
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" onClick={() => setIsActive(false)}>
            Community
          </NavLink>
        </li>
        <li className="md:ml-auto md:mr-4">
          <Profile />
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
