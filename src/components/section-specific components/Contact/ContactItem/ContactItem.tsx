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
  return clickable ? (
    <a href={link} className={classes.wrapper} target="_blank">
      <IconFa
        iconName={iconName}
        size={size}
        color={color}
        brandIcon={brandIcon}
        className={classes.icon}
      />
      <p className={`p-2-projects ${classes.contactText}`}>{text}</p>
    </a>
  ) : (
    <div className={classes.wrapper}>
      <IconFa
        iconName={iconName}
        size={size}
        color={color}
        brandIcon={brandIcon}
        className={classes.icon}
      />
      <p className={`p-2-projects ${classes.contactText}`}>{text}</p>
    </div>
  );
};

export default ContactItem;
