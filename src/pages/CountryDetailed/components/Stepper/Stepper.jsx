import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Container, Typography } from "ui/index";
import rim from "assets/images/colizey.jpeg";
import classes from "./Stepper.module.scss";
import { styled } from "@mui/material/styles";

const steps = [
  {
    label: "О стране",
    description: `Италия – родина современного промышленного дизайна и центр мировой моды, здесь находятся одни из наиболее престижных вузов, которые предлагают программы бакалавриата и магистратуры в сфере моды и дизайна. Студенты вузов участвуют в показах недели моды, проходят стажировки в крупнейших компаниях индустрии и много времени уделяют отработке практических навыков`,
    image: rim,
  },
  {
    label: "Преимущества обучения в Италии",
    description:
      "Высокий уровень образования – ведущие университеты с признанными программами. Доступная стоимость – учеба и проживание дешевле, чем в других странах Европы. Идеально для творческих профессий – искусство, дизайн, мода в окружении культурного наследия. Международная среда – студенты со всего мира и возможность выучить язык.",
    image: rim,
  },
  {
    label: "Образ жизни в Италии",
    description: `Италия предлагает высококачественное образование с международно признанными программами, особенно в сферах искусства, дизайна и архитектуры. Студентов привлекают доступная стоимость обучения, стипендии, международная среда и возможности работать и оставаться в стране после окончания учёбы.Италия также дает возможность изучать итальянский язык и культурные традиции.`,
    image: rim,
  },
];

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  marginTop: "-12px",

  ".MuiStepLabel-iconContainer": {
    background: "var(--color-white)",
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
    transform: "translateX(-11px)",
    position: "relative",
    zIndex: 1,

    "& .MuiStepIcon-root": {
      color: "transparent",

      "& text": {
        fill: "var(--color-black)",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "nunito-SemiBold",
        transform: "translateY(0px) translateX(3px)",
      },
    },
  },
}));

const CustomStepContent = styled(StepContent)(({ theme }) => ({
  marginTop: "-45px",
}));

export const CountryStepper = () => {
  return (
    <Container>
      <Typography variant="heading">О стране</Typography>
      <Stepper orientation="vertical" className={classes.block}>
        {steps.map((step) => (
          <Step key={step.label} expanded active>
            <CustomStepLabel />

            <CustomStepContent>
              <div className={classes.step}>
                <div className={classes.stepText}>
                  <Typography
                    variant="h4"
                    weight="bold"
                    className={classes.label}
                  >
                    {step.label}
                  </Typography>
                  <Typography>{step.description}</Typography>
                </div>
                <div className={classes.image}>
                  <img src={step.image} alt="country" />
                </div>
              </div>
            </CustomStepContent>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};
