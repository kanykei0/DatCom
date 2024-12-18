import { Container, ReviewCard, Typography } from "ui/index";
import classes from "./ReviewsBlock.module.scss";
import { PATHS } from "utils/constants/Constants";
import { Link } from "react-router-dom";
import { useReviewsBlockStore } from "./store/useReviewsBlockStore";
import { useMediaQuery } from "utils/helpers/useMedia";

export const ReviewsBlock = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  const { reviews, loading } = useReviewsBlockStore({
    offset: 0,
    limit: isMobile ? 2 : 3,
  });

  return (
    <div className={classes.block}>
      <Container>
        <div className={classes.heading}>
          <Typography variant="heading">отзывы</Typography>
          <Link to={PATHS.reviews}>
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
