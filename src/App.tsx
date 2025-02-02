import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import HomePage from "./components/pages/HomePage/HomePage";
import RootPage from "./components/pages/RootPage/RootPage";

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {path: "", element: <HomePage/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
