import { useState } from "react";
import { Typography, Container, Button } from "ui/index";
import classes from "./Form.module.scss";
import formImage from "../../assets/images/formImage.png";
import Select from "react-select";
import {
  optionsCountry,
  optionsSpeciality,
  optionsStudy,
} from "utils/constants/Constants";

export const Form = () => {
  const [state, setState] = useState({
    name: "",
    number: "",
    country: null,
    study: null,
    speciality: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name) => (selectedOption) => {
    setState((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Container>
      <div className={classes.blockWrapper}>
        <div className={classes.formBlock}>
          <Typography variant="h1" weight="bold" upp="upp">
            оставить заявку
          </Typography>
          <div className={classes.inputWrapper}>
            <Typography weight="semiBold">
              Заполните форму, чтобы начать процесс поступления
            </Typography>

            <form className={classes.form} onSubmit={onFormSubmit}>
              <input
                type="text"
                name="name"
                className={classes.formInput}
                placeholder="ФИО"
                value={state.name}
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="number"
                className={classes.formInput}
                placeholder="Номер телефона"
                value={state.number}
                onChange={handleInputChange}
              />

              <Select
                name="country"
                options={optionsCountry}
                isMulti
                placeholder="Страна"
                value={state.country}
                onChange={handleSelectChange("country")}
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "45px",
                    border: "1.5px solid var(--color-primary)",
                    borderRadius: "8px",
                    textAlign: "start",
                  }),
                }}
              />

              <Select
                name="study"
                options={optionsSpeciality}
                isMulti
                placeholder="Направление обучения"
                value={state.study}
                onChange={handleSelectChange("study")}
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "45px",
                    border: "1.5px solid var(--color-primary)",
                    borderRadius: "8px",
                    textAlign: "start",
                  }),
                }}
              />

              <Select
                name="speciality"
                options={optionsStudy}
                isMulti
                placeholder="Желаемая специальность"
                value={state.speciality}
                onChange={handleSelectChange("speciality")}
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "45px",
                    border: "1.5px solid var(--color-primary)",
                    borderRadius: "8px",
                    textAlign: "start",
                  }),
                }}
              />

              <Button type="submit" size="default" fullWidth={true}>
                <Typography variant="h4">Отправить заявку</Typography>
              </Button>
            </form>
          </div>
        </div>
        <div className={classes.formBlock}>
          <img src={formImage} alt="FormImage" />
        </div>
      </div>
    </Container>
  );
};
