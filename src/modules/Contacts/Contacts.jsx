import { ContactsData } from "utils/constants/Constants";
import classes from "./Contacts.module.scss";
import { Typography } from "ui/index";

export const Contacts = () => {
  return (
    <div className={classes.block}>
      <div className={classes.block_left}>
        {ContactsData.map((item, key) => (
          <div key={key} className={classes.block_left_info}>
            <div
              className={`${classes.iconBlock} ${
                key === 0 || key === 2 ? classes.changeIcon : ""
              }`}
            >
              {item.icon}
            </div>
            <div className={classes.infoBlock}>
              <Typography variant="h4" color="white" weight="bold">
                {item.title}
              </Typography>
              <Typography color="white">{item.text}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.block_right}>
        <iframe
          className={classes.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.697068557148!2d74.61568007617974!3d42.87923767114932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb75503e9feef%3A0xa079c9abc97cb6da!2zRGF0Q29tLdGD0YfQtdCx0LAg0LfQsCDQs9GA0LDQvdC40YbQtdC5!5e0!3m2!1sru!2skg!4v1732734310852!5m2!1sru!2skg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
