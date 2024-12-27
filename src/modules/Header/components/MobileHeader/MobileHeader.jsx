import { BurgerMenuIcon, DatComLogo } from "assets/index";
import classes from "./MobileHeader.module.scss";
import { Link, useLocation } from "react-router-dom";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";
import { useEffect, useRef, useState } from "react";
import { OpenMenu } from "./components/OpenMenu";

export const MobileHeader = () => {
  const [isClose, setIsClose] = useState(true);
  const nav = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsClose(true);
  }, [nav.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsClose(true);
      }
    };

    if (!isClose) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isClose]);

  return (
    <div className={classes.block}>
      <div className={classes.block_logo}>
        <Link to="/">
          <DatComLogo />
        </Link>
      </div>
      <div className={classes.block_right}>
        <div className={classes.block_lang}>
          <SwitchLanguage />
        </div>
        <div className={classes.block_burger} onClick={() => setIsClose(false)}>
          <BurgerMenuIcon />
        </div>
      </div>
      <OpenMenu isClose={isClose} setIsClose={setIsClose} menuRef={menuRef} />
    </div>
  );
};
