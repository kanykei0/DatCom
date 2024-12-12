import { Box, Modal, Grid2 as Grid } from "@mui/material";
import { CloseIcon } from "assets/index";
import { Typography } from "ui/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  borderRadius: "20px",
  background: "var(--color-white)",
  border: "none",
  outline: "none",
  p: 4,
};

export const ModalComponent = ({ open, closeModal, student }) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <Box sx={style}>
        <Grid container sx={{ gap: "20px" }}>
          <Grid size={5}>
            <Box component="div" sx={{ borderRadius: "20px" }}>
              <Box
                component="img"
                src={student.image}
                sx={{ width: "100%", borderRadius: "14px" }}
              />
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography variant="h3" weight="semiBold">
              {student.title}
            </Typography>
            <Typography variant="h5" weight="regular">
              {student.description}
            </Typography>
          </Grid>
        </Grid>
        <Box
          component="button"
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          <CloseIcon />
        </Box>
      </Box>
    </Modal>
  );
};
