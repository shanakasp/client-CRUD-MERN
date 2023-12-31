import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BackPain from "./Diseases/BackPain";
import Earache from "./Diseases/Earache";
import HeadachePage from "./Diseases/Headache";
import JointPain from "./Diseases/JointPant";
import KneePain from "./Diseases/KneePain";
import NeckPain from "./Diseases/NeckPain";
import ShoulderPain from "./Diseases/ShoulderPain";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pain/1" element={<HeadachePage />} />
        <Route path="/pain/2" element={<ShoulderPain />} />
        <Route path="/pain/3" element={<BackPain />} />
        <Route path="/pain/4" element={<Earache />} />
        <Route path="/pain/5" element={<JointPain />} />
        <Route path="/pain/6" element={<KneePain />} />
        <Route path="/pain/7" element={<NeckPain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
