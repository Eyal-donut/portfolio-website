import { FC } from "react";
import IconFa from "../../../global components/IconFa/IconFa";
import classes from "./ContactItem.module.css";

interface ContactItemProps {
  iconName: string;
  size: number;
  text: string;
  clickable: boolean;
  color?: string;
  link?: string;
  brandIcon?: boolean;
}

const ContactItem: FC<ContactItemProps> = ({
  iconName,
  size,
  color,
  text,
  link,
  clickable,
  brandIcon,
}) => {
  return (
    <div className={classes.Wrapper}>
      {clickable && (
        <a href={link}>
          <IconFa
            iconName={iconName}
            size={size}
            color={color}
            brandIcon={brandIcon}
          />
          <p className="p-2-projects">{text}</p>
        </a>
      )}
      {!clickable && (
        <>
          <IconFa
            iconName={iconName}
            size={size}
            color={color}
            brandIcon={brandIcon}
          />
          <p className="p-2-projects">{text}</p>
        </>
      )}
    </div>
  );
};

export default ContactItem;
