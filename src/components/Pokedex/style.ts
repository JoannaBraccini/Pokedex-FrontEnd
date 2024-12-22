import pokedexDesktop from "/pokedex.png";
import pokedexMobile from "/pokedexLeft.png";
import bgPokedex from "/bgPokedex.png";

export const dialogStyle = {
  height: "100vh",
  "& .MuiDialog-paper": {
    maxWidth: { xs: "xs", md: "md" },
    width: { xs: 320, md: 700 },
    height: "100%",
    boxShadow: "none",
    margin: 0,
    padding: { xs: 0, md: 8 },
    background: {
      xs: `url(${pokedexMobile}) no-repeat center`,
      md: `url(${pokedexDesktop}) no-repeat center`,
    },

    backgroundSize: { xs: "contain" },
  },
};

export const contentBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContet: "center",
  alignItems: "center",
  overflow: "hidden",
  marginTop: {
    xs: "calc(50vh - 57%)",
    sm: "calc(50vh - 60%)",
    md: "calc(50vh - 67.6%)",
  },
  marginLeft: { xs: 1.6, sm: 0.6, md: -0.4 },
  width: 187,
  height: 125,
  background: `url(${bgPokedex}) center no-repeat`,
  backgroundSize: "contain",
  "@media (orientation: landscape)": {
    width: "calc(30vw - 37%)",
    marginTop: "calc(50vh - 60%)",
    marginLeft: "calc(20vw - 64%)",
  },
};

export const imgBoxStyle = {
  position: "relative",
  bottom: 20,
  width: 200,
  height: "auto",
};

export const closeButtonStyle = {
  position: "absolute",
  bottom: 298,

  left: {
    xs: 38,
    md: 94,
  },
  width: 20,
  height: 20,

  color: "white",
  transform: "scale(1.6)",
  "&:hover": {
    transform: "scale(2)",
    transition: "transform 0.3s ease",
  },
};

export const favoriteTextStyle = {
  position: "absolute",
  bottom: {
    xs: 225,
  },
  left: {
    xs: 50,
    md: 105,
  },
  fontSize: {
    xs: 13,
  },
  color: "white",
  textShadow: "2px 2px 6px black",
};
export const nameTextStyle = {
  position: "absolute",
  top: {
    xs: 256,
    md: 300,
  },
  left: {
    xs: 120,
    md: 390,
  },
  fontSize: {
    xs: 18,
    md: 30,
  },
  fontWeight: 600,
  color: "white",
};

export const buttonPrevStyle = {
  position: "absolute",
  bottom: {
    xs: 261,
    md: 193,
  },
  right: {
    xs: 109,
    md: 203,
  },
  color: "white",
  width: {
    xs: 10,
    md: "auto",
  },
};

export const buttonNextStyle = {
  position: "absolute",
  bottom: {
    xs: 261,
    md: 193,
  },
  right: {
    xs: 64,
    md: 98,
  },
  color: "white",
  width: {
    xs: 10,
    md: "auto",
  },
};
