import { FC } from "react";
import classes from "./IconFa.module.css";

interface IconFaProps {
  iconName: string;
  size: number;
  color?: string;
  brandIcon?: boolean;
  className?: string;
}

const IconFa: FC<IconFaProps> = ({
  className,
  iconName,
  size,
  color,
  brandIcon,
}) => {
  return brandIcon ? (
    <i
      className={`${classes.icon} ${className} fa-brands fa-solid fa-${iconName} fa-${size}x ${color}`}
    ></i>
  ) : (
    <i
      className={`${classes.icon} ${className} fa-solid fa-${iconName} fa-${size}x ${color}`}
    />
  );
};

export default IconFa;
