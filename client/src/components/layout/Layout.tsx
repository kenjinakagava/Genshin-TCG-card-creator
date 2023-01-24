import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HeroHeader from "../../pages/home/HeroHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? <HeroHeader /> : <Header />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
