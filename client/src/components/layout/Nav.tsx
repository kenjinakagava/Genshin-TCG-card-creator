import HamburgerMenu from "../../features/HamburgerMenu";

const Nav = () => {
  return (
    <nav className="md:flex md:justify-between md:bg-grey md:shadow-under md:fixed md:w-full">
      <div className="container mr-auto pb-4 items-center md:pt-4 md:mx-auto md:flex">
        <img src="./Logo.svg" alt="" className="hidden md:block" />
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
