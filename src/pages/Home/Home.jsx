import {
  AboutUs,
  Hero,
  FAQBlock,
  Services,
  Slider,
  Contacts,
  ReviewsBlock,
  ModalComponent,
} from "modules/index";
import { useStudentsStore } from "pages/Students/store/useStudentsStore";
import { useState } from "react";
import { Container, CustomCard, Typography } from "ui/index";
import { CountryArr, StudentsArr } from "utils/constants/Constants";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const limit = 6;

  const { students, count } = useStudentsStore(offset, limit);

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
    <div>
      <Hero />
      <Container>
        <AboutUs />
        <Typography variant="heading">страны</Typography>
        <Slider
          sliderList={CountryArr}
          renderSlide={(item) => (
            <CustomCard
              variant="country"
              title={item.title}
              image={item.image}
              description={item.description}
            />
          )}
        />
        <Typography variant="heading">Услуги</Typography>
        <Services />
        <Typography variant="heading">поступившие студенты</Typography>
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
      </Container>
      <ReviewsBlock />
      <Container>
        <Typography variant="heading">часто задаваемые вопросы</Typography>
        <FAQBlock />
        <Typography variant="heading">Контакты</Typography>
        <Contacts />
      </Container>

      <ModalComponent open={open} closeModal={closeModal} student={student} />
    </div>
  );
};
