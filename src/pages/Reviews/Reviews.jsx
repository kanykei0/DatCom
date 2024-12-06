import { useState } from "react";
import { Typography, Container, ReviewCard } from "ui/index";
import classes from "./Reviews.module.scss";
import { StarIcon } from "assets/index";
import { useReviewsStore } from "./store/useReviewsStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";

export const Reviews = () => {
  const [offset, setOffset] = useState(0);

  const { reviews, count } = useReviewsStore(offset);

  const onChange = (_, page) => {
    setOffset((page - 1) * 6);
  };

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
          {reviews.map((item, key) => (
            <ReviewCard data={item} key={key} />
          ))}
        </div>

        <PaginationComponent count={count} onChange={onChange} />

        <div>
          <Typography variant="heading">Видео-отзывы</Typography>
        </div>
      </Container>
    </div>
  );
};
