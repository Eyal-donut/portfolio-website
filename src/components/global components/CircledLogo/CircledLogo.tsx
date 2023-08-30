import classes from "./CircledLogo.module.css";
import { FC } from "react";

interface CircledLogoProps {
  logoURL?: string;
  isMouseOver: boolean;
  className: string;
}

const CircledLogo: FC<CircledLogoProps> = ({
  logoURL,
  isMouseOver,
  className,
}) => {
  return (
    <div
      className={`${classes.logoWrap} ${className}`}
      style={{
        filter: isMouseOver ? "invert(1)" : "invert(0)",
      }}
    >
      <div
        className={classes.logo}
        style={{
          background: `url(${logoURL}) no-repeat center center/contain`,
        }}
      />
    </div>
  );
};

export default CircledLogo;
