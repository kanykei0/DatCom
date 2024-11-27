import {
  AboutUs,
  Hero,
  FAQBlock,
  Services,
  Slider,
  Contacts,
  ReviewsBlock,
} from "modules/index";
import { Container, CustomCard, Typography } from "ui/index";
import { CountryArr, StudentsArr } from "utils/constants/Constants";

export const Home = () => {
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
          sliderList={StudentsArr}
          renderSlide={(item) => (
            <CustomCard
              variant="students"
              title={item.title}
              image={item.image}
              description={item.description}
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
    </div>
  );
};
