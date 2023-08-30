import { contactDetails, sectionIds } from "../../../../constants/constants";
import { FC } from "react";
import classes from "./ContactSection.module.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactSection: FC = () => {
  return (
    <section id={sectionIds.CONTACT} className={classes.contactSection}>
      <h4 className={classes.contactHeader}>contact</h4>
      <div className={classes.wrapper}>
        {contactDetails.map((item) => {
          return (
            <ContactItem
              key={`${item.iconName} ${item.text}`}
              iconName={item.iconName}
              size={item.size}
              text={item.text}
              link={item?.link}
              color={item?.color}
              clickable={item?.clickable}
              brandIcon={item?.brandIcon}
              isExternalLogo={item?.isExternalLogo}
              logoURL={item?.logoURL}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
