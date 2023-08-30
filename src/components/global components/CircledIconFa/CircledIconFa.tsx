import { FC } from "react";
import IconFa from "../IconFa/IconFa";
import classes from "./CircledIconFa.module.css";

interface CircledIconFaProps {
  iconName: string;
  size: number;
  isMouseOver: boolean;
  brandIcon?: boolean;
  className?: string;
  color?: string;
}

const CircledIconFa: FC<CircledIconFaProps> = ({
  iconName,
  size,
  brandIcon,
  className,
  color,
  isMouseOver,
}) => {
  return (
    <div
      className={classes.iconWrap}
      style={{ filter: isMouseOver ? "invert(1)" : "invert(0)" }}
    >
      <IconFa
        iconName={iconName}
        size={size}
        brandIcon={brandIcon}
        className={className}
        color={color}
      />
    </div>
  );
};

export default CircledIconFa;
