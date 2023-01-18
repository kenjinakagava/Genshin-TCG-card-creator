import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path={"/"} element={<div>home</div>}></Route>
            <Route path={"/cards"} element={<div>cards</div>}></Route>
            <Route path={"/community"} element={<div>community</div>}></Route>
            <Route path={"/login"} element={<div>login</div>}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
