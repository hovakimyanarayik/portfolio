import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import Greeting from "./pages/Greeting";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    {
        path: '',
        element: <Greeting />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]

const Routes = () => useRoutes(routes)


export default Routes