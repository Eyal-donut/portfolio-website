import { FC } from "react";
import classes from './IconFa.module.css'

interface IconFaProps {
  iconName: string;
  size: number;
  color?: string;
}

const IconFa: FC<IconFaProps> = ({ iconName, size, color }) => {
  return <i className={`${classes.icon} fa-solid fa-${iconName} fa-${size}x ${color}`} />;
};

export default IconFa;
