import { FC } from "react";
import classes from "./IconFa.module.css";

interface IconFaProps {
  iconName: string;
  size: number;
  color?: string;
  brandIcon?: boolean;
}

const IconFa: FC<IconFaProps> = ({ iconName, size, color, brandIcon }) => {
  return brandIcon ? (
    <i
      className={`${classes.icon} fa-brands fa-solid fa-${iconName} fa-${size}x ${color}`}
    ></i>
  ) : (
    <i
      className={`${classes.icon} fa-solid fa-${iconName} fa-${size}x ${color}`}
    />
  );
};

export default IconFa;
