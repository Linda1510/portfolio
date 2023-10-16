import { Route, Routes } from "react-router-dom";
import Home from "./features/home/home";
import Header from "./components/header";
import Me from "./components/me";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import "./styles/styles.scss";
function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="home" element={<Home />}/>
        <Route path="me" element={<Me />} /> 
        <Route path="projects" element={<Projects />} /> 
        <Route path="contact" element={<Contact />} /> 
        <Route path="login" element={<Login />} /> 
        <Route path="register" element={<Register />} /> 
      </Routes>
    </>
  );
}

export default App;




