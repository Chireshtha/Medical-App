import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Patient from "../pages/Patient";
import Caretaker from "../pages/Caretaker";
import Navigationbar from "../layout/Navigationbar";
import Login from "../Authenticate/Login";


 const routes = createBrowserRouter([
    {
        path:'/', element: <App />,
        errorElement:<ErrorPage />,
        children: [
            {path:'/navbar', element:<Navigationbar />},
            {path:'/', element:<Login />},
            {path:'/home', element:<Home />},
            {path:'/patient', element:<Patient />},
            {path:'/caretaker', element: <Caretaker />}
         ]
    }
 ]);

 export default routes;