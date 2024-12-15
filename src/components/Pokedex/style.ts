import logo2 from "../../assets/logo2.png";
import quem from "../../assets/quem.png";

export const boxStyle = {
  backgroundImage: `url(${logo2})`,
  backgroundSize: "cover",
  backgroundPositionY: "center",
  height: { xs: 90, md: 150 },
};

export const iconButtonStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  color: "white",
  "&:hover": { color: "#e01d18" },
};

export const contentBoxStyle = {
  backgroundImage: `url(${quem})`,
  backgroundSize: "cover",
  backgroundPositionY: "bottom",
  pl: { md: 3 },
  pt: { md: 1 },
};

export const imgBoxStyle = {
  height: "auto",
  width: "15rem",
  marginBottom: "16px",
};

export const buttonPrevStyle = {
  color: "white",
  background: "linear-gradient(90deg, #ff0000,  #080808)",
  "&:hover": {
    background: "linear-gradient(90deg, #080808, #ff0000)",
  },
};

export const buttonNextStyle = {
  color: "white",
  background: "linear-gradient(90deg, #080808, #ff0000)",
  "&:hover": {
    background: "linear-gradient(90deg, #ff0000,  #080808)",
  },
};
