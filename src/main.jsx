import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CarPage from "./pages/CarPage.jsx";
import AccessoryPage from "./pages/AccessoryPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu.jsx";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store/reduxStore.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

let router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/car",
        element: <CarPage />,
      },
      // {
      //   path: "/accessory",
      //   element: <AccessoryPage />,
      // },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
    errorElement: <ErrorPage/>
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
