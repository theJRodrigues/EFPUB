import { Routes } from "react-router";
import Home from "./pages/home/home";
import { Route } from "react-router";
import About from "./pages/about/about";
import Register from "./pages/register/register";
import Login from "./pages/login/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
