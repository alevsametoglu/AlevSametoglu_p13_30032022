import React from "react";
import { Outlet } from "react-router";
import { Footer, Header } from "../components";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
