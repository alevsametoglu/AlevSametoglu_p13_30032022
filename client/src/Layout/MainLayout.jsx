import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { Footer, Header } from "../components";

export default function MainLayout(props) {
  const { isAuth } = useSelector((state) => state.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate({ pathname: "/Profile" });
    } else {
      navigate({ pathname: "/" });
    }
  }, [isAuth]);

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
