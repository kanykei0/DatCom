import { Link } from "react-router-dom";
import { Typography } from "..";
import classes from "./CustomCard.module.scss";
import { ArrowMore } from "assets/index";

const cardVariant = {
  country: {
    card: classes.country,
    imageBlock: classes.countryImage,
    desc: classes.countryDesc,
    btn: classes.countryBtn,
  },
  students: {
    card: classes.students,
    imageBlock: classes.studentsImage,
    desc: classes.studentsDesc,
    btn: classes.studentsBtn,
  },
};

export const CustomCard = ({ variant, image, title, description }) => {
  const cardConfig = cardVariant[variant];

  if (!cardConfig) {
    return null;
  }

  const { card, imageBlock, desc, btn } = cardConfig;

  return (
    <div className={`${classes.card} ${card}`}>
      <div className={imageBlock}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.infoBlock}>
        <Typography variant="h3" weight="regular">
          {title}
        </Typography>
        <Typography className={desc}>{description}</Typography>
        <Link to="/">
          <Typography weight="regular" className={btn}>
            Подробнее <ArrowMore />
          </Typography>
        </Link>
      </div>
    </div>
  );
};
