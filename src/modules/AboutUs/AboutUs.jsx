import { DatComLogo } from "assets/index";
import classes from "./AboutUs.module.scss";
import { Typography } from "ui/index";

export const AboutUs = () => {
  return (
    <div className={classes.block}>
      <div className={classes.block_left}>
        <div className={classes.logo}>
          <DatComLogo />
        </div>
      </div>
      <div className={classes.block_right}>
        <Typography upp="upp" weight="bold" variant="h2">
          О Datcom
        </Typography>
        <Typography className={classes.desc}>
          Мы сами учились за границей и знаем, как бывает сложно и страшно на
          этом пути. Чтобы поддержать таких же талантливых и амбициозных
          студентов, мы создали международное образовательное агентство DatСom
        </Typography>
        <Typography>
          Каждый год сотни людей реализуют мечту об обучении за границей с нашей
          помощью.Каждый год сотни людей реализуют мечту об обучении за границей
          с нашей помощью.Каждый год сотни людей реализуют мечту об обучении за
          границей с нашей помощью.
        </Typography>
      </div>
    </div>
  );
};
