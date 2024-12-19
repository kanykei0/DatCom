import { PATHS } from "utils/constants/Constants";
import classes from "./Services.module.scss";
import { Button, Typography } from "ui/index";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useServicesStore } from "./store/useServicesStore";

export const Services = () => {
  const { t } = useTranslation();
  const [desc, setDesc] = useState(0);
  const { services } = useServicesStore();
  const [titles, setTitles] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (services.length > 0 && services[0]?.included) {
      const titlesArray = services[0].included.map((item) => item.title);
      const servicesArray = services[0].included.map(
        (item) => item.description
      );
      setTitles(titlesArray);
      setDescriptions(servicesArray);
      setImage(services[0].image);
    } else {
      console.log("No data available or still loading");
    }
  }, [services]);

  return (
    <div className={classes.block}>
      <div className={classes.block_top}>
        {titles.map((title, key) => (
          <div
            className={`${classes.title} ${desc === key ? classes.active : ""}`}
            key={key}
            onClick={() => setDesc(key)}
          >
            <Typography weight="regular">{title}</Typography>
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
          <Typography>{descriptions[desc]}</Typography>
        </div>
        <div className={classes.right}>
          <img src={image} alt="Image" />

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
