import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getCards from "./utils/getCards";
import { Auth0Provider } from "@auth0/auth0-react";
import Layout from "./components/layout/Layout";

function App() {
  getCards("http://localhost:4001/cards/7");
  return (
    <>
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
              <Route path="/" element={<div>home</div>}></Route>
              <Route path="/cards" element={<div>cards</div>}></Route>
              <Route path="/community" element={<div>community</div>}></Route>
              <Route path="/login" element={<div>login</div>}></Route>
            </Routes>
          </Layout>
        </Router>
      </Auth0Provider>
    </>
  );
}

export default App;
