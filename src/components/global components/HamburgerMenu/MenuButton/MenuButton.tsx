import { FC } from "react";
import classes from "./MenuButton.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setMenuDisplay } from "../../../../redux/features/menuDisplaySlice";
import { RootState } from "../../../../redux/store";

interface MenuButtonProps {
  isMenuVisible: boolean;
}

const MenuButton: FC<MenuButtonProps> = ({ isMenuVisible: isClicked }) => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector(
    (state: RootState) => state.menuDisplay.value
  );
  const handleClick = () => {
    dispatch(setMenuDisplay(!isMenuVisible));
  };

  return (
      <button
        className={
          isClicked
            ? `${classes.buttonWrap} ${classes.buttonWrapClicked}`
            : classes.buttonWrap
        }
        onClick={handleClick}
      >
        <div
          className={
            isClicked
              ? `${classes.centerLine} ${classes.centerLineClicked}`
              : classes.centerLine
          }
        >
          <div
            className={
              isClicked
                ? `${classes.topLine} ${classes.topLineClicked}`
                : classes.topLine
            }
          />
          <div
            className={
              isClicked
                ? `${classes.bottomLine} ${classes.bottomLineClicked}`
                : classes.bottomLine
            }
          />
        </div>
      </button>
  );
};

export default MenuButton;
