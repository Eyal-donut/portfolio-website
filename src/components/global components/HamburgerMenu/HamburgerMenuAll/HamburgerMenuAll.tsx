import Menu from "../Menu/Menu";
import classes from "./HamburgerMenuAll.module.css";
import scrollToHTMLBySectionName from "../../../../utils/scrollToHTMLBySectionName";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../../redux/store";
import { setMenuDisplay } from "../../../../redux/features/menuDisplaySlice";

const HamburgerMenu = () => {
  const isMenuVisible = useSelector(
    (state: RootState) => state.menuDisplay.value
  );
  const dispatch = useDispatch();
  const handleMenuNavButtonClick = (
    name: "Home" | "About" | "Projects" | "Contact"
  ) => {
    scrollToHTMLBySectionName(name);
    dispatch(setMenuDisplay(false));
  };
  return (
    <div
      className={
        isMenuVisible
          ? classes.menuWrap
          : `${classes.menuWrap} ${classes.hidden}`
      }
    >
      <Menu
        isMenuVisible={isMenuVisible}
        onBtnClick={handleMenuNavButtonClick}
      />
    </div>
  );
};

export default HamburgerMenu;
