import { Container } from "ui/index";
import classes from "./Header.module.scss";
import { DesktopHeader } from "./components/DesktopHeader/DesktopHeader";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Container>
        <DesktopHeader />
      </Container>
    </div>
  );
};
