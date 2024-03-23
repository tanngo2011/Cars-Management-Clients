import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import { Outlet } from "react-router-dom";
import Footer from "./components/Menu/Footer";
import MenuContainer from "./containers/MenuContainer";

function App() {
  return (
    <>
      <MenuContainer />

      <main className="john">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
