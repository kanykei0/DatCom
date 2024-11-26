import { AboutUs, Hero, Services, Slider } from "modules/index";
import { Container, CustomCard, Typography } from "ui/index";
import { CountryArr, StudentsArr } from "utils/constants/Constants";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Container>
        <Typography variant="heading">страны</Typography>
      </Container>
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
      <Container>
        <Typography variant="heading">Услуги</Typography>
      </Container>
      <Services />
      <Container>
        <Typography variant="heading">поступившие студенты</Typography>
      </Container>
      <Slider
        amount={3.2}
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
    </div>
  );
};
