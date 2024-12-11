import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/ui/home.tsx";
import Layout from "../pages/auth/ui/layout.tsx";
import Login from "../pages/auth/ui/login.tsx";
import Signup from "../pages/auth/ui/signup.tsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/auth",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
