import pokedex from "../../assets/pokedex.png";

export const dialogStyle = {
  "& .MuiDialog-paper": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
};

export const boxStyle = {
  backgroundImage: `url(${pokedex})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "center",
  maxWidth: "100vw",
  position: "relative",
};

export const closeButtonStyle = {
  position: "absolute",
  bottom: 166,
  left: 29,
  color: "white",
  transform: "scale(1.2)",
  "&:hover": {
    transform: "scale(1.5)",
    transition: "transform 0.3s ease",
  },
};

export const contentBoxStyle = {
  // marginTop: 10,
};

export const imgBoxStyle = {
  margin: "5rem 5rem 0 0",
  width: "20rem",
};

export const buttonPrevStyle = {
  color: "white",
  // background: "linear-gradient(90deg, #ff0000,  #080808)",
  // "&:hover": {
  //   background: "linear-gradient(90deg, #080808, #ff0000)",
  // },
};

export const buttonNextStyle = {
  color: "white",
  // background: "linear-gradient(90deg, #080808, #ff0000)",
  // "&:hover": {
  //   background: "linear-gradient(90deg, #ff0000,  #080808)",
  // },
};
