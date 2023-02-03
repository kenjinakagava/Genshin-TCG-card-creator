import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {isAuthenticated ? (
        <LogoutButton>
          <img
            src={user?.picture}
            alt={user?.name}
            className="w-9 hidden md:block rounded-full max-h-9"
          />
        </LogoutButton>
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default Profile;
