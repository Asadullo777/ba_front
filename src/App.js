import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, SportPage, TechPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sport",
    element: <SportPage />,
  },
  {
    path: "/tech",
    element: <TechPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
