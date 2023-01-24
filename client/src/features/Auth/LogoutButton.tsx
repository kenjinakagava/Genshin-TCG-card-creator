import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";
interface LogoutButtonProps {
  children?: React.ReactNode;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      }}
      className="flex items-end gap-4 md:flex-col md:items-center md:gap-0"
    >
      {children}
      Logout
      <FiLogOut size={36} className="md:hidden" />
    </button>
  );
};

export default LogoutButton;
