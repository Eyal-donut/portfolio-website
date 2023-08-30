import { FC } from "react";
import Navbar from "../components/global components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/global components/HamburgerMenu/HamburgerMenuAll/HamburgerMenuAll";

const RootPage: FC = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      <Outlet />
    </>
  );
};
export default RootPage;
