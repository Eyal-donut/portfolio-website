import { FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootPage: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default RootPage;
