import { Button, Container, Typography } from "ui/index";
import classes from "./Hero.module.scss";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.hero}>
      <Container>
        <div className={classes.textBlock}>
          <Typography
            color="white"
            weight="bold"
            variant="h1"
            className={classes.title}
          >
            обучение за рубежом
          </Typography>
          <Typography className={classes.desc} variant="h4" color="white">
            Помощь студентам в достижении их образовательных целей за рубежом
          </Typography>
          <Button size="medium">
            <Typography>{t("header.btn")}</Typography>
          </Button>
        </div>
      </Container>
    </div>
  );
};
