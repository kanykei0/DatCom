import { Footer, Header } from "modules/index";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={classes.block}>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
