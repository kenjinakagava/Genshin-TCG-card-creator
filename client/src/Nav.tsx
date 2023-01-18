import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  return (
    <nav className="md:flex md:justify-between md:bg-grey md:shadow-under md:fixed md:w-full">
      <div className="container mx-auto pb-4">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
