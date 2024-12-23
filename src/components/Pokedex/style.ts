import pokedexMobile from "/pokedexLeft.png";
import bgPokedex from "/bgPokedex.png";

const displayCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const dialogStyle = {
  height: "100vh",
  margin: "auto",
  "& .MuiDialog-paper": {
    background: "transparent",
    width: "100%",
    height: "100%",
    boxShadow: "none",
    margin: "auto",
    overflow: "hidden",
  },
};

export const CardStyle = {
  ...displayCenter,
  background: `url(${pokedexMobile}) no-repeat center`,
  backgroundSize: { xs: "contain" },
  flexDirection: "column",
  justifyContent: "start",
  height: "100%",
};

export const headerStyle = {
  fontSize: {
    xs: "1rem",
    sm: "1.3rem",
    xm: "3rem",
    md: "1.6rem",
    lg: "3rem",
    xl: "3rem",
    xxl: "3rem",
  },
  fontWeight: 600,
  color: "white",
  padding: 0,
  marginLeft: 10,
  marginTop: 16,
  marginBottom: 4,

  outline: "5px solid black",
};

export const mediaBoxStyle = {
  ...displayCenter,
  background: `url(${bgPokedex}) center no-repeat`,
  backgroundSize: { xs: "contain", sm: "cover" },
  height: {
    xs: "8rem",
    sm: "10rem",
    xm: "10rem",
    md: "10rem",
    lg: "12rem",
    xl: "10rem",
    xxl: "10rem",
  },
  width: "100%",
  marginRight: { xs: 3.5 },

  // outline: "5px solid purple",
};

export const mediaStyle = {
  height: "140%",
  width: "auto",
};

export const actionsStyle = {
  ...displayCenter,
  justifyContent: "space-between",
  width: "100%",

  outline: "5px solid gray",
};

export const boxCloseStyle = {
  marginLeft: { xs: -0.3 },
  paddingTop: { xs: 1.7 },
};

export const closeButtonStyle = {
  color: "white",
  transform: { xs: "scale(1.5)", sm: "scale(1.8)", lg: "scale(2.3)" },
  "&:hover": {
    transform: { xs: "scale(1.8)", sm: "scale(2.5)" },
    transition: "transform 0.3s ease",
  },
};

export const boxButtonsStyle = {
  paddingTop: { xs: 8.4 },
  paddingLeft: 3,
  display: "flex",
  gap: 1,

  outline: "5px solid purple",
};

export const buttonPrevStyle = {
  color: "white",
};

export const buttonNextStyle = {
  color: "white",
};

export const cardContentStyle = {
  outline: "5px solid blue",
  textAlign: "center",
  fontSize: { xs: "1rem", sm: "1.2rem", lg: "1.5rem" },
  color: "white",
  paddingBottom: { xs: "1rem", sm: "2rem" },
};
