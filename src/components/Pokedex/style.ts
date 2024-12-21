import pokedexDesktop from "/pokedex.png";
import pokedexMobile from "/pokedexLeft.png";
import bgPokedex from "/bgPokedex.png";

export const dialogStyle = {
  height: "100vh",
  "& .MuiDialog-paper": {
    height: "100%",
    width: "100%",
    boxShadow: "none",
    margin: 1,
    padding: 0,
    background: {
      xs: `url(${pokedexMobile}) no-repeat center`,
      md: `url(${pokedexDesktop}) no-repeat center`,
    },
    backgroundSize: {
      xs: "contain",
    },
  },
};

export const contentBoxStyle = {
  position: "relative",
  overflow: "hidden",
  marginTop: {
    xs: 34.1,
    md: 22,
  },
  marginLeft: {
    xs: 1.5,
    md: 3.9,
  },
  width: {
    xs: 182,
    md: 290,
  },
  height: {
    xs: 122,
    md: 192,
  },
  background: `url(${bgPokedex}) center`,
  backgroundSize: "cover",
};

export const imgBoxStyle = {
  width: {
    xs: "14rem",
    md: "22rem",
  },
  position: "absolute",
  left: {
    xs: -20,
    md: -30,
  },
  top: {
    xs: -30,
    md: -50,
  },
};

export const closeButtonStyle = {
  position: "absolute",
  bottom: {
    xs: "15.8rem",
    md: "30rem",
  },
  left: {
    xs: "1.6rem",
    md: "2rem",
  },
  color: "white",
  transform: {
    xs: "scale(1.6)",
    md: "scale(2)",
  },
  "&:hover": {
    transform: {
      xs: "scale(2)",
      md: "scale(2.6)",
    },
    transition: "transform 0.3s ease",
  },
};

export const boxLeftStyle = {};
export const boxRightStyle = {
  width: 100,
  backgroundColor: "white",
};

export const favoriteTextStyle = {
  position: "absolute",
  bottom: {
    xs: "11.9rem",
    md: "20rem",
  },
  left: {
    xs: "2.95rem",
    md: "2rem",
  },
  fontSize: {
    xs: 13,
    md: 16,
  },
  fontWeight: {
    xs: 500,
    md: 600,
  },
  color: "white",
  textShadow: "2px 2px 6px black",
};
export const nameTextStyle = {
  position: "absolute",
  top: {
    xs: "13.8rem",
    md: "2rem",
  },
  right: {
    xs: "2rem",
    md: "2rem",
  },
  fontSize: {
    xs: 18,
    md: 35,
  },
  fontWeight: 600,
  color: "white",
};

export const buttonPrevStyle = {
  position: "absolute",
  bottom: {
    xs: "14.2rem",
    md: "20rem",
  },
  right: {
    xs: "6.75rem",
    md: "20rem",
  },
  color: "white",
  width: {
    xs: "10px",
    md: 130,
  },
};

export const buttonNextStyle = {
  position: "absolute",
  bottom: {
    xs: "14.2rem",
    md: "20rem",
  },
  right: {
    xs: "3.9rem",
    md: "20rem",
  },
  color: "white",
  width: {
    xs: "10px",
    md: 130,
  },
};
