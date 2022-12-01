import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import AllProjects from "./pages/AllProjects";
import Greeting from "./pages/Greeting";

const routes = [
    {
        path: '',
        element: <Greeting />
    },
    {
        path: 'allProjects',
        element: <AllProjects />
    },
    {
        path: 'about',
        element: <About />
    }
]

const Routes = () => useRoutes(routes)


export default Routes