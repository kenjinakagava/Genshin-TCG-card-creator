import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path={"/"}></Route>
            <Route path={"/cards"}></Route>
            <Route path={"community"}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
