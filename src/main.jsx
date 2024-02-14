import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import store from "./store";
import Login from "./pages/login";
import FormQuickCount from "./pages/Store";

export const Router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/form-count",
    element: <FormQuickCount />,
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center h-screen text-3xl">
        Not Found 404
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);