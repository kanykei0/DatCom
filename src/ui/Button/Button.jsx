import styles from "./Button.module.scss";

export const Button = ({
  variant = "primary",
  type,
  children,
  size,
  className,
  rounded,
  onClick,
  id,
}) => {
  const classNameGenerated = [
    styles.button,
    styles[variant],
    styles[size],
    rounded && styles.rounded,
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <button
      id={id}
      type={type}
      className={classNameGenerated}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
