import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import { Header } from "./layouts/header";
import { Home } from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
