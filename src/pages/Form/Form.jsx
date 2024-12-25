import { useState } from "react";
import { Typography, Container, Button } from "ui/index";
import classes from "./Form.module.scss";
import formImage from "../../assets/images/formImage.png";
import { TextField, MenuItem } from "@mui/material";
import { IMaskInput } from "react-imask";
import { useFormStore } from "./store/useFormStore";
import { useMediaQuery } from "utils/helpers/useMedia";

export const Form = () => {
  const [state, setState] = useState({
    name: "",
    number: "",
    country: "",
    study: "",
    speciality: "",
  });

  const isTablet = useMediaQuery("(max-width: 700px)");

  const { submitForm, countryList, studyList, specialityList } = useFormStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    submitForm(state);
  };

  const sharedTextFieldStyles = {
    textAlign: "start",
    "& .MuiOutlinedInput-root": {
      height: "45px",
      borderRadius: "8px",
      background: "var(--color-white)",
      outline: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px",
    },
    "& .MuiInputLabel-root": {
      lineHeight: "1.2",
      top: "-4px",
    },
    "& .MuiInputLabel-shrink": {
      top: "0px",
    },
  };

  return (
    <Container>
      <div className={classes.blockWrapper}>
        <div className={`${classes.formBlock} ${classes.round}`}>
          <Typography variant="h1" weight="bold" upp="upp">
            оставить заявку
          </Typography>
          <div className={classes.inputWrapper}>
            <Typography weight="semiBold">
              Заполните форму, чтобы начать процесс поступления
            </Typography>

            <form className={classes.form} onSubmit={onFormSubmit}>
              <TextField
                name="name"
                label="ФИО"
                variant="outlined"
                value={state.name}
                onChange={handleInputChange}
                sx={sharedTextFieldStyles}
              />

              <TextField
                name="number"
                label="Номер телефона"
                variant="outlined"
                value={state.number}
                slotProps={{
                  input: {
                    inputComponent: IMaskInput,
                    inputProps: {
                      mask: "+996 (000) 000 000",
                      onAccept: (value) => {
                        setState((prevState) => ({
                          ...prevState,
                          number: value,
                        }));
                      },
                      unmask: true,
                    },
                  },
                }}
                sx={sharedTextFieldStyles}
              />

              <TextField
                id="country"
                name="country"
                select
                label="Страна"
                value={state.country}
                defaultValue={""}
                sx={sharedTextFieldStyles}
                onChange={handleInputChange}
              >
                {countryList.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="study"
                name="study"
                select
                label="Направление обучения"
                value={state.study}
                defaultValue={""}
                sx={sharedTextFieldStyles}
                onChange={handleInputChange}
              >
                {studyList.map((option) => (
                  <MenuItem key={option.id} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="speciality"
                name="speciality"
                select
                label="Желаемая специальность"
                value={state.speciality}
                defaultValue={""}
                sx={sharedTextFieldStyles}
                onChange={handleInputChange}
              >
                {specialityList.map((option) => (
                  <MenuItem key={option.id} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>

              <Button type="submit" size="default" fullWidth={true}>
                <Typography variant="h4">Отправить заявку</Typography>
              </Button>
            </form>
          </div>
        </div>
        <div
          className={`${classes.formBlock} ${isTablet ? classes.hidden : ""}`}
        >
          <img src={formImage} alt="FormImage" />
        </div>
      </div>
    </Container>
  );
};
