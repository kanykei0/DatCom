import { useState } from "react";
import classes from "./Universities.module.scss";
import { Typography, Container, CustomCard } from "ui/index";
import { useUniversitiesStore } from "./store/useUniversitiesStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";
import { InputAdornment, TextField } from "@mui/material";
import { PhoneIcon } from "assets/index";

export const Universities = () => {
  const [offset, setOffset] = useState(0);
  const [state, setState] = useState({
    search: "",
    country: [],
    programm: [],
  });
  const limit = 12;

  const { universities, count } = useUniversitiesStore(offset, limit, state);

  const onChange = (_, page) => {
    setOffset((page - 1) * limit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };

  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="heading">университеты</Typography>
        <div className={classes.searchBar}>
          <TextField
            name="search"
            label="Поиск"
            variant="outlined"
            value={state.search}
            onChange={handleInputChange}
            sx={{
              textAlign: "start",
              width: "420px",
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
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <div className={classes.icon}>
                      {/* NADO BUDET CHANGE ICON NA SEARCH YA CHOTO NE NASHEL */}
                      <PhoneIcon />
                    </div>
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        <div className={classes.cardWrapper}>
          {universities.map((item, key) => (
            <CustomCard
              key={key}
              variant="students"
              title={item.title}
              image={item.image}
              description={item.description}
              link={`/universities/${item.id}`}
            />
          ))}
        </div>

        <PaginationComponent count={count} onChange={onChange} />
      </Container>
    </div>
  );
};
