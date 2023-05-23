import './App.css';
import Login from "./components/screens/login/login";
import "./bootstrap.min.css";
import Home from "./components/HomePage/Home.js";
import { Routes, BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );

}