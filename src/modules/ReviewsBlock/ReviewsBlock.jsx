import { Container, ReviewCard, Typography } from "ui/index";
import classes from "./ReviewsBlock.module.scss";
import { ReviewsData } from "utils/constants/Constants";
import { Link } from "react-router-dom";
import { useReviewsBlockStore } from "./store/useReviewsBlockStore";

export const ReviewsBlock = () => {
  const { reviews, loading } = useReviewsBlockStore();

  return (
    <div className={classes.block}>
      <Container>
        <div className={classes.heading}>
          <Typography variant="heading">отзывы</Typography>
          <Link to="/">
            <Typography weight="regular">Смотреть все</Typography>
          </Link>
        </div>
        <div className={classes.list}>
          {reviews.map((item, key) => (
            <ReviewCard key={key} data={item} short />
          ))}
        </div>
      </Container>
    </div>
  );
};
