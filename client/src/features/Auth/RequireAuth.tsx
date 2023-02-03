import LoginButton from "./LoginButton";

const RequireAuth = () => {
  return (
    <main className="min-h-screen bg-beige">
      <div className="container mx-auto">
        <p className="text-6xl">Please log in to use this functionality</p>
        <LoginButton />
      </div>
    </main>
  );
};

export default RequireAuth;
