import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => {
        loginWithRedirect();
      }}
      className="flex flex-col items-center"
    >
      <FaUserCircle size={36} className="hidden md:block" />
      Login
    </button>
  );
};

export default LoginButton;
