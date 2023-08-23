import { FC } from "react";

interface IconFaProps {
  iconName: string;
  size: number;
  color?: string;
}

const IconFa: FC<IconFaProps> = ({ iconName, size, color }) => {
  return <i className={`fa-solid fa-${iconName} fa-${size}x ${color}`} />;
};

export default IconFa;
