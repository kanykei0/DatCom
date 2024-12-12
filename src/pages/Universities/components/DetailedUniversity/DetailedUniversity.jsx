import classes from "./DetailedUniversity.module.scss";
import { Typography, Container, CustomCard } from "ui/index";
import { useDetailedUniversityStore } from "./store/useDetailedUniversityStore";
import { useParams } from "react-router-dom";
import { Slider, ReviewsBlock, ModalComponent } from "modules/index";
import { useState } from "react";

export const DetailedUniversity = () => {
  const { id } = useParams();
  const { university, students } = useDetailedUniversityStore(id);

  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({});

  const openModal = (student) => {
    setOpen(true);
    setStudent(student);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="heading">{university.title}</Typography>
        <div className={classes.imageWrapper}>
          <img src={university.image} alt={university.title} />
          <div className={classes.articleBlock}>
            <Typography
              variant="h3"
              weight="bold"
              upp="upp"
              className={classes.secondaryTitle}
            >
              {university.secondary_title}
            </Typography>
            <Typography variant="h5">
              {university.secondary_description}
            </Typography>
          </div>
        </div>

        <div className={classes.description}>
          <Typography variant="h5">{university.description}</Typography>
        </div>

        <div className={classes.students}>
          <Typography variant="heading">Известные выпускники</Typography>

          <div className={classes.studentsSlider}>
            <Slider
              amount={2.8}
              sliderList={students}
              renderSlide={(item) => (
                <CustomCard
                  variant="students"
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  modal={() => openModal(item)}
                />
              )}
            />
          </div>
        </div>

        <div className={classes.reviews}></div>
      </Container>
      <ReviewsBlock />

      <ModalComponent open={open} closeModal={closeModal} student={student} />
    </div>
  );
};
