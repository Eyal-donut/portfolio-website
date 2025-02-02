import { FC, useState } from "react";
import CircledIconFa from "../../../../global components/CircledIconFa/CircledIconFa";
import CircledLogo from "../../../../global components/CircledLogo/CircledLogo";
import classes from "./ContactItem.module.css";

interface ContactItemProps {
  iconName: string;
  size: number;
  text: string;
  clickable: boolean;
  logoURL?: string;
  color?: string;
  link?: string;
  brandIcon?: boolean;
  isExternalLogo?: boolean;
}

const ContactItem: FC<ContactItemProps> = ({
  iconName,
  size,
  color,
  text,
  link,
  clickable,
  brandIcon,
  isExternalLogo,
  logoURL,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };
  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  return clickable ? (
    <a
      href={link}
      className={classes.wrapper}
      target="_blank"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {!isExternalLogo && (
        <>
          <CircledIconFa
            iconName={iconName}
            size={size}
            color={color}
            brandIcon={brandIcon}
            className={classes.icon}
            isMouseOver={isMouseOver}
          />
          <p className={`p-2-projects ${classes.contactText}`}>{text}</p>
        </>
      )}
      {isExternalLogo && (
        <>
          <CircledLogo
            logoURL={logoURL}
            isMouseOver={isMouseOver}
            className={classes.icon}
          />
          <p className={`p-2-projects ${classes.contactText}`}>{text}</p>
        </>
      )}
    </a>
  ) : (
    <div
      className={classes.wrapper}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {!isExternalLogo && (
        <>
          <CircledIconFa
            iconName={iconName}
            size={size}
            color={color}
            brandIcon={brandIcon}
            className={classes.icon}
            isMouseOver={isMouseOver}
          />
          <p className={`p-2-projects ${classes.contactText}`}>{text}</p>
        </>
      )}
      {isExternalLogo && (
        <>
          <CircledLogo
            logoURL={logoURL}
            isMouseOver={isMouseOver}
            className={classes.icon}
          />
          <p className={`p-2-projects ${classes.contactText}`}>{text}</p>
        </>
      )}
    </div>
  );
};

export default ContactItem;
