import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import "./styles/stles.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
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
      <Navigation/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
