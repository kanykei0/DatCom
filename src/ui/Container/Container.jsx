import classes from "./Container.module.scss";

export const Container = ({ children, header }) => {
  return (
    <div className={`${classes.container} ${header && classes.header}`}>
      {children}
    </div>
  );
};
