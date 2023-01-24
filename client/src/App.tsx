import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain="dev-o46z1d23o5pn8au0.us.auth0.com"
          clientId="1V1gbLJHgCGY6InX5VflHnoAFaur2IFs"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cards" element={<div>cards</div>}></Route>
                <Route path="/community" element={<div>community</div>}></Route>
                <Route path="/login" element={<div>login</div>}></Route>
              </Routes>
            </Layout>
          </Router>
        </Auth0Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
