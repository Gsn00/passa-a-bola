import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Sobre from "./pages/sobre/index.jsx";
import Historia from "./pages/historia/index.jsx";
import HistoriaSingle from "./pages/historiasingle/index.jsx";
import Encontros from "./pages/encontros/index.jsx";
import EncontrosSingle from "./pages/encontrossingle/index.jsx";
import Copa from "./pages/copa/index.jsx";
import CopaInscricao from "./pages/copainscricao/index.jsx";
import Peneiras from "./pages/peneiras/index.jsx";
import PeneirasSingle from "./pages/peneirassingle/index.jsx";
import Login from "./pages/login/index.jsx";
import Register from "./pages/register/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/historia",
    element: <Historia />,
  },
  {
    path: "/historia/*",
    element: <HistoriaSingle />,
  },
  {
    path: "/encontros",
    element: <Encontros />,
  },
  {
    path: "/encontros/*",
    element: <EncontrosSingle />,
  },
  {
    path: "/copa",
    element: <Copa />,
  },
  {
    path: "/copa/inscricao",
    element: <CopaInscricao />,
  },
  {
    path: "/peneiras",
    element: <Peneiras />,
  },
  {
    path: "/peneiras/inscricao",
    element: <PeneirasSingle />,
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

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
