import pokedex from "/pokedex.png";
import bgPokedex from "/bgPokedex.png";

export const dialogStyle = {
  "& .MuiDialog-paper": {
    boxShadow: "none",
    height: "100vh",
    background: `url(${pokedex}) no-repeat`,
    backgroundSize: { sm: "contain" },
  },
};

export const contentBoxStyle = {
  overflow: "hidden",
  marginTop: 22,
  marginLeft: 3.9,
  width: 290,
  height: 192,
  background: `url(${bgPokedex}) center`,
  backgroundSize: "cover",
  position: "relative",
};

export const imgBoxStyle = {
  width: "22rem",
  position: "absolute",
  left: -30,
  top: -50,
};

export const closeButtonStyle = {
  position: "absolute",
  bottom: 175,
  left: 53,
  color: "white",
  transform: "scale(2.3)",
  "&:hover": {
    transform: "scale(2.6)",
    transition: "transform 0.3s ease",
  },
};

export const boxLeftStyle = {};
export const boxRightStyle = {
  width: 100,
  backgroundColor: "white",
};

export const titleLeftStyle = {
  position: "absolute",
  bottom: 80,
  left: 105,
  fontSize: 16,
  fontWeight: 600,
  color: "white",
  textShadow: "2px 2px 6px black",
};
export const titleRightStyle = {
  position: "absolute",
  top: 220,
  right: 85,
  fontSize: 35,
  fontWeight: 600,
  color: "white",
};

export const buttonPrevStyle = {
  position: "absolute",
  bottom: 90,
  color: "white",
  right: 230,
  width: 130,
};

export const buttonNextStyle = {
  position: "absolute",
  bottom: 90,
  color: "white",
  right: 68,
  width: 130,
};
