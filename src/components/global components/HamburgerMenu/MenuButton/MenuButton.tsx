import { FC, useState } from "react";
import classes from "./MenuButton.module.css";

interface MenuButtonProps {
  isMenuVisible: boolean;
  onBtnClick: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({
  isMenuVisible: isClicked,
  onBtnClick,
}) => {

  const handleClick = () => {
    onBtnClick();
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
