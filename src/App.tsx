import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        // { path: "project", element: <ProjectPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
