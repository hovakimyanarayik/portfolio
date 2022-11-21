import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";

const routes = [
    {
        path: '',
        element: <Work />
    },
    {
        path: 'about',
        element: <About />
    }
]

const Routes = () => useRoutes(routes)


export default Routes