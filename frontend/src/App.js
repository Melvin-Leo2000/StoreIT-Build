import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Router>
        <div>
          <header></header>

          <section>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/order" element={<Order />}></Route>
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
