import { BsReddit, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-footer container">
      <ul>
        <li>
          <a>
            <BsReddit size={24} className="fill-[#999] hover:fill-white" />
          </a>
        </li>
        <li>
          <a>
            <BsTwitter size={24} className="fill-[#999] hover:fill-white" />
          </a>
        </li>
        <li>
          <a>
            <BsFacebook size={24} className="fill-[#999] hover:fill-white" />
          </a>
        </li>
        <li>
          <a>
            <BsInstagram size={24} className="fill-[#999] hover:fill-white" />
          </a>
        </li>
        <li></li>
      </ul>
      <ul>
        <li>Home</li>
        <li>Cards</li>
        <li>Community</li>
      </ul>
    </footer>
  );
};

export default Footer;
