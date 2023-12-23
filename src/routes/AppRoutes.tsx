import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
