import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";

interface LoginButtonProps {
  icon?: boolean;
}

const LoginButton = ({ icon }: LoginButtonProps) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => {
        loginWithRedirect();
      }}
      className="flex flex-col items-center"
    >
      {icon ? <FaUserCircle size={36} className="hidden md:block" /> : null}
      Login
    </button>
  );
};

export default LoginButton;
