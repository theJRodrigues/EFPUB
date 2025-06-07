import { Routes } from "react-router";
import Home from "./pages/home/home";
import { Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
