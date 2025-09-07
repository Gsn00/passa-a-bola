import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Sobre from "./pages/sobre/index.jsx";
import Historia from "./pages/historia/index.jsx";
import HistoriaSingle from "./pages/historiasingle/index.jsx";

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
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
