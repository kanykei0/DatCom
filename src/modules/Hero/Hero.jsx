import { Button, Container, Typography } from "ui/index";
import classes from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PATHS } from "utils/constants/Constants";
import { useEffect, useState } from "react";
import { useApiStore } from "utils/requester/requester";
import { Loader } from "pages/index";
import imageEmpty from "assets/images/empty.jpg";

export const Hero = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchData } = useApiStore();

  useEffect(() => {
    const fetchMainPage = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetchData(`/main-info/main-page/`);
        setData(response);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMainPage();
  }, [fetchData]);

  if (loading) {
    return <Loader />;
  }

  const backgroundImage = data.length > 0 ? data[0]?.image : imageEmpty;

  return (
    <div
      className={classes.hero}
      style={{
        background: `linear-gradient(
          0deg,
          rgba(38, 38, 38, 0.4) 0%,
          rgba(38, 38, 38, 0.4) 100%
        ), url(${backgroundImage}) center/cover no-repeat`,
      }}
    >
      <Container>
        <div className={classes.textBlock}>
          <Typography
            color="white"
            weight="bold"
            variant="h1"
            className={classes.title}
          >
            {data.length > 0 && data[0].title}
          </Typography>
          <Typography className={classes.desc} variant="h4" color="white">
            {data.length > 0 && data[0].description}
          </Typography>
          <Button size="medium">
            <Link to={PATHS.form}>
              <Typography>{t("header.btn")}</Typography>
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};
