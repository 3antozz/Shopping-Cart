import App from "./App";
import ErrorPage from "./ErrorPage";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Components/Shop/Shop";
import Summary from "./Components/Order-Summary/Order-Summary";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, element: <Homepage /> 
      },
      {
        path: "Home",
        element: <Homepage />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "Summary",
        element: <Summary />,
      },
    ]
  },

];

export default routes;
