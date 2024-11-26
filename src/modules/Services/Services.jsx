import { ServicesData } from "utils/constants/Constants";
import classes from "./Services.module.scss";
import { Typography } from "ui/index";

export const Services = () => {
  return (
    <div className={classes.block}>
      <div className={classes.block_top}>
        {ServicesData.map((title, key) => (
          <div key={key}>
            <Typography>{title.title}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.block_bottom}>
        <div className={classes.left}>
          <Typography>Что входит в услугу:</Typography>
          <Typography></Typography>
        </div>
        <div className={classes.right}></div>
      </div>
    </div>
  );
};
