import { Typography, Container, ReviewCard } from "ui/index";
import classes from "./Reviews.module.scss";
import { StarIcon } from "assets/index";
import { ReviewsData } from "utils/constants/Constants";

export const Reviews = () => {
  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="heading">Отзывы</Typography>
        <Typography variant="h3" weight="semiBold" className={classes.semiText}>
          Отзывы студентов и их родителей о процессе поступления и обучения за
          рубежом
        </Typography>
        <div className={classes.reviewWrapper}>
          <div className={classes.starWrapper}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className={classes.reviewData}>
            <Typography weight="regular">4.9</Typography>
            <Typography color="gray2">300 оценок</Typography>
          </div>
        </div>

        <div className={classes.cardWrapper}>
          {ReviewsData.map((item, key) => (
            <ReviewCard data={item} key={key} />
          ))}
        </div>

        <div>
          <Typography variant="heading">Видео-отзывы</Typography>
        </div>
      </Container>
    </div>
  );
};
