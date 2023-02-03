import { Link } from "react-router-dom";
import HamburgerMenu from "../../features/HamburgerMenu/HamburgerMenu";

const Nav = () => {
  return (
    <nav className="h-[5.75rem] fixed w-full z-10 bg-grey md:flex md:justify-between md:shadow-under ">
      <div className="container mr-auto pb-4 items-center md:pt-4 md:mx-auto md:flex">
        <Link to="/">
          <img src="./Logo.svg" alt="" className="hidden md:block" />
        </Link>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
