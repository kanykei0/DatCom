import { useEffect, useState } from "react";
import { Typography, Container, CustomCard } from "ui/index";
import classes from "./Students.module.scss";
import { useStudentsStore } from "./store/useStudentsStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";

export const Students = () => {
  const [offset, setOffset] = useState(0);
  const limit = 9;

  const { students, count } = useStudentsStore(offset, limit);

  const onChange = (_, page) => {
    setOffset((page - 1) * limit);
  };

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="heading">поступившие студенты</Typography>
        <div className={classes.cardWrapper}>
          {students.map((item, key) => (
            <CustomCard
              key={key}
              variant="students"
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>

        <PaginationComponent count={count} onChange={onChange} />
      </Container>
    </div>
  );
};
