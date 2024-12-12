import { useState } from "react";
import classes from "./FAQBlock.module.scss";
import { Typography } from "ui/index";
import { PlusIcon } from "assets/index";
import { useFAQBlockStore } from "./store/useFAQBlockStore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export const FAQBlock = () => {
  const [selected, setSelected] = useState(null);

  const { questions, loading } = useFAQBlockStore();

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className={classes.list}>
      {questions.map((data, key) => (
        <Accordion
          square
          key={key}
          disableGutters
          sx={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            mb: 3,
            boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
            background: "var(--color-white)",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<PlusIcon />}
            sx={{
              m: 0,
              p: 2,
              "& .MuiAccordionSummary-content": {
                margin: 0,
                "&.Mui-expanded": {
                  margin: 0,
                },
              },
            }}
          >
            <Typography variant="h4" weight="bold">
              {data.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5">{data.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
