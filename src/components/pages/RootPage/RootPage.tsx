import { FC } from "react";
// import Navbar from "../components/global components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../../redux/store";
import HamburgerMenu from "../../global components/HamburgerMenu/HamburgerMenuAll/HamburgerMenuAll";
import MenuButton from "../../global components/HamburgerMenu/MenuButton/MenuButton";

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
