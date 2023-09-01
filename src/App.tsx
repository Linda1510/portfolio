import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./components/home";
import "./styles/stles.scss";
import Header from "./components/header";
import Me from "./components/me";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/me",
      element: <Me />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    
  ]);
 
  return (
    <div>
      <Header/>
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
