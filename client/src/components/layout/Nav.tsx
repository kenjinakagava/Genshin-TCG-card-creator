import { Link } from "react-router-dom";
import HamburgerMenu from "../../features/HamburgerMenu/HamburgerMenu";

const Nav = () => {
  return (
    <nav className="md:flex md:justify-between md:bg-grey md:shadow-under fixed md:w-full z-10">
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
