import { FC } from "react";
import { contactDetails, sectionIds } from "../../../../constants/constants";
import ContactItem from "./ContactItem/ContactItem";

import classes from "./Contact.module.css";

const Contact: FC = () => {
  return (
    <section id={sectionIds.CONTACT} className={classes.contactSection}>
      <h3 className={classes.contactHeader}>contact</h3>
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

export default Contact;
