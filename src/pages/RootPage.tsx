import { FC } from "react";
// import Navbar from "../components/global components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import MenuButton from "../components/global components/HamburgerMenu/MenuButton/MenuButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import HamburgerMenu from "../components/global components/HamburgerMenu/HamburgerMenuAll/HamburgerMenuAll";

const RootPage: FC = () => {
  const isMenuVisible = useSelector(
    (state: RootState) => state.menuDisplay.value
  );
  return (
    <>
      {/* <Navbar /> */}
      <MenuButton isMenuVisible={isMenuVisible} />
      <HamburgerMenu />
      <Outlet />
    </>
  );
};
export default RootPage;
