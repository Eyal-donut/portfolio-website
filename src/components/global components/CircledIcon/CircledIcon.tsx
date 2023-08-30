import classes from "./CircledIcon.module.css";
import { FC } from "react";

interface CircledIconProps {
  iconURL: string;
  isMouseOver: boolean;
  className: string;
}

const CircledIcon: FC<CircledIconProps> = ({
  iconURL,
  isMouseOver,
  className,
}) => {
  return (
    <div
      className={`${classes.iconWrap} ${className}`}
      style={{
        filter: isMouseOver ? "invert(1)" : "invert(0)",
        background: `url(${iconURL}) no-repeat center center/contain`,
      }}
    />
  );
};

export default CircledIcon;
