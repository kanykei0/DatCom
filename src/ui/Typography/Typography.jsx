import { truncateString } from "utils/helpers/helpers";
import classes from "./Typography.module.scss";

export const Typography = ({
  font = "",
  variant = "body",
  weight = "",
  upp = "",
  children,
  className,
  color = "",
  truncate = 0,
  id,
}) => {
  const Tags = {
    h1: "h1",
    h2: "h2",
    body: "p",
    smallBody: "p",
    extraSmallBody: "p",
  };

  const classNameGenerated = [
    classes[variant],
    classes[weight],
    classes[upp],
    classes[color],
    classes[font],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const TagName = Tags[variant] || "p";

  return (
    <TagName id={id} className={classNameGenerated}>
      {!truncate ? children : truncateString(children, truncate)}
    </TagName>
  );
};
