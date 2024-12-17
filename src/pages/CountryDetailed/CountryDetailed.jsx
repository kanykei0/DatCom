// import { useParams } from "react-router-dom";
import { Container, Typography } from "ui/index";
// import { useCountryDetailedStore } from "./store/useCountryDetailedStore";
import classes from "./CountryDetailed.module.scss";
import photo from "assets/images/countryDetailed.png";
import { CountryStepper } from "./components/Stepper/Stepper";

export const CountryDetailed = () => {
  // const { id } = useParams();
  // const { university } = useCountryDetailedStore(id);

  return (
    <>
      <div className={classes.block}>
        <Container>
          <div className={classes.blockTop}>
            <div className={classes.blockTop_text}>
              <Typography variant="heading" className={classes.heading}>
                ИТалия
              </Typography>
              <Typography>
                Учеба в Италии – мечта тысяч студентов, и у вас есть реальная
                возможность воплотить её в жизнь! С нашим подробным руководством
                по образованию и жизни в Италии ваш путь станет проще и
                понятнее.Учеба в Италии – мечта тысяч студентов, и у вас есть
                реальная возможность воплотить её в жизнь! С нашим подробным
                руководством по образованию и жизни в Италии ваш путь станет
                проще и понятнее.Учеба в Италии – мечта тысяч студентов, и у вас
                есть реальная возможность воплотить её в жизнь! С нашим
                подробным руководством по образованию и жизни в Италии ваш путь
                станет проще и понятнее.Учеба в Италии – мечта тысяч студентов,
                и у вас есть реальная возможность воплотить её в жизнь! С нашим
                подробным руководством по образованию и жизни в Италии ваш путь
                станет проще и понятнее.zУчеба в Италии – мечта тысяч студентов,
                и у вас есть реальная возможность воплотить её в жизнь!
              </Typography>
            </div>
            <div className={classes.blockTop_image}>
              <img src={photo} alt="country" />
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.aboutCountry}>
        <CountryStepper />
      </div>
    </>
  );
};
