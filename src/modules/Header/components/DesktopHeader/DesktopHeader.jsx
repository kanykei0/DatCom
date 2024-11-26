import { Button, SocialMedia, Typography } from "ui/index";
import classes from "./DesktopHeader.module.scss";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";
import { DatComLogo } from "assets/index";
import { navigationData } from "utils/constants/Constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const DesktopHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.header}>
      <div className={classes.topHeader}>
        <div className={classes.phone}>
          <a href="#">
            <Typography>+996 505‒28‒63‒85</Typography>
          </a>
        </div>
        <div className={classes.sociallinks}>
          <SocialMedia header />
        </div>
        <div className={classes.phone}>
          <SwitchLanguage />
        </div>
      </div>
      <nav className={classes.bottomHeader}>
        <div className={classes.logoBlock}>
          <DatComLogo />
        </div>
        {navigationData.map((nav, key) => (
          <Link to={nav.path} key={key}>
            <Typography weight="regular">{nav.nav}</Typography>
          </Link>
        ))}
        <Button size="medium">
          <Typography weight="regular">{t("header.btn")}</Typography>
        </Button>
      </nav>
    </div>
  );
};
