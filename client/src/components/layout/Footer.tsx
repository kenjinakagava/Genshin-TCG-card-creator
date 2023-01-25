import { BsReddit, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-footer py-8">
      <div className="container flex mx-auto items-center gap-4 flex-col md:flex-row">
        <ul className="flex gap-4">
          <li>
            <a href="#">
              <BsReddit size={36} className="fill-[#999] hover:fill-white" />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter size={36} className="fill-[#999] hover:fill-white" />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFacebook size={36} className="fill-[#999] hover:fill-white" />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram size={36} className="fill-[#999] hover:fill-white" />
            </a>
          </li>
          <li></li>
        </ul>
        <ul className="flex flex-col text-[#999] gap-4 md:flex-row">
          <li>
            <a href="#" className="hover:text-white hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="contact" className="hover:text-white hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
