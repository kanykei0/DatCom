import { PATHS, ServicesData } from "utils/constants/Constants";
import classes from "./Services.module.scss";
import { Button, Typography } from "ui/index";
import { useState } from "react";
import { ServicesBlockIcon } from "assets/index";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Services = () => {
  const { t } = useTranslation();
  const [desc, setDesc] = useState(0);

  return (
    <div className={classes.block}>
      <div className={classes.block_top}>
        {ServicesData.map((title, key) => (
          <div
            className={`${classes.title} ${desc === key ? classes.active : ""}`}
            key={key}
            onClick={() => setDesc(key)}
          >
            <Typography weight="regular">{title.title}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.block_bottom}>
        <div className={classes.left}>
          <Typography
            className={classes.left_title}
            variant="h3"
            weight="regular"
          >
            Что входит в услугу:
          </Typography>
          <Typography>{ServicesData[desc].description}</Typography>
        </div>
        <div className={classes.right}>
          <ServicesBlockIcon />
          <div className={classes.btnBlock}>
            <Button variant="secondary" fullWidth size="default">
              <Link to={PATHS.form}>
                <Typography weight="regular">{t("header.btn")}</Typography>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
