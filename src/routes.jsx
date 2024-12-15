import App from "./App";
import ErrorPage from "./ErrorPage";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Components/Shop/Shop";
import Summary from "./Components/Order-Summary/Order-Summary";
import Details from "./Components/Details/Details";

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
        path: "home",
        element: <Homepage />,
      },
      {
        path: "shop",
        children: [
          {
            index: true,
            element: <Shop />,
          },
          {
            path: "products/:productId",
            element: <Details />,
          },
        ]
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ]
  },

];

export default routes;
