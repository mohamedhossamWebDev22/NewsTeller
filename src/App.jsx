import React from "react";
import "./app.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Ok from "./pages/ok";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <h1>error</h1>
  },
  {
    path: "/ok",
    element: <Ok />,
    errorElement : <h1>error</h1>
  }
]);

const App = () => {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};

export default App;
