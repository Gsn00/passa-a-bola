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
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
