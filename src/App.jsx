import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import Produto from "./pages/Produto";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/produto" element={<Produto />}></Route>
      </Routes>
    </>
  );
}

export default App;
