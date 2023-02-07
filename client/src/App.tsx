import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import CreateACardPage from "./pages/create-a-card/CreateACardPage";
import MyCardsPage from "./pages/my-cards/MyCardsPage";
import AllCards from "./pages/allCards/AllCards";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Auth0Provider
            domain="dev-o46z1d23o5pn8au0.us.auth0.com"
            clientId="1V1gbLJHgCGY6InX5VflHnoAFaur2IFs"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-cards" element={<MyCardsPage />} />
                <Route path="/create-a-card" element={<CreateACardPage />} />
                <Route path="/all-cards" element={<AllCards />} />
              </Routes>
            </Layout>
          </Auth0Provider>
        </QueryClientProvider>
      </Router>
    </>
  );
}

export default App;
