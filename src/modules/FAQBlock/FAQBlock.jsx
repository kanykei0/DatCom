import { useState } from "react";
import classes from "./FAQBlock.module.scss";
import { Typography } from "ui/index";
import { OftenQuestionsData } from "utils/constants/Constants";
import { PlusIcon } from "assets/index";

export const FAQBlock = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className={classes.list}>
      {OftenQuestionsData.map((data, key) => (
        <div key={key} className={classes.accordion}>
          <div className={classes.block}>
            <div className={classes.question} onClick={() => toggle(key)}>
              <Typography variant="h4" weight="bold">
                {data.question}
              </Typography>
              <div
                className={`${classes.icon} ${
                  selected === key ? classes.open : ""
                }`}
              >
                <PlusIcon />
              </div>
            </div>
          </div>
          <div
            className={
              selected === key
                ? `${classes.answer} ${classes.show}`
                : `${classes.answer}`
            }
          >
            <Typography className={classes.spantext}>{data.answer}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
