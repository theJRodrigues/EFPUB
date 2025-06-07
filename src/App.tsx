import { Routes } from "react-router";
import Home from "./pages/home/home";
import { Route } from "react-router";
import About from "./pages/about/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
