import pokedexMobile from "/pokedexLeft.png";
import bgPokedex from "/bgPokedex.png";

const displayCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const dialogStyle = {
  ...displayCenter,
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
  position: "relative",
  background: `url(${pokedexMobile}) no-repeat center`,
  backgroundSize: "contain",
  flexDirection: "column",
  height: "70%",
  width: "90vw",
  maxWidth: { xs: "400px", sm: "500px", md: "600px" },
  maxHeight: { xs: "600px", sm: "700px", md: "800px" },
  objectFit: "contain",
};

export const headerStyle = {
  color: "white",
  position: "absolute",
  top: { xs: "20%", sm: "15%", lg: "14%", xl: "12%" },
  right: { xs: "15%", md: "22%", lg: "25%", xl: "28%" },
};

export const mediaBoxStyle = {
  ...displayCenter,
  background: `url(${bgPokedex}) center no-repeat`,
  backgroundSize: "contain",
  height: {
    xs: "26%",
    sm: "29%",
  },
  width: "100%",
  position: "absolute",
  top: { xs: "32%", sm: "30%" },
  right: { xs: "4.3%", md: "3.3%", xl: "2.5%" },
};

export const mediaStyle = {
  height: "140%",
  width: "auto",
  maxHeight: "300px",
  maxWidth: "300px",
  objectFit: "contain",
};

export const actionsStyle = {
  ...displayCenter,
  justifyContent: "space-between",
  width: { xs: "85%", sm: "81%", md: "65%", lg: "57%", xl: "51%" },
};

export const closeAreaStyle = {
  position: "absolute",
  bottom: { xs: "25%", sm: "23%", md: "22%", xl: "21%" },
};

export const closeButtonStyle = {
  color: "white",
  transform: {
    xs: "scale(2)",
    sm: "scale(2.5)",
    lg: "scale(1.8)",
  },
  "&:hover": {
    transform: {
      xs: "scale(2.3)",
      sm: "scale(2.8)",
      xl: "scale(2.1)",
    },
    transition: "transform 0.3s ease",
  },
};

export const skipAreaStyle = {
  ...displayCenter,
  gap: { xs: 1.3, sm: 3, md: 4, lg: 3, xl: 1.5 },
  position: "absolute",
  bottom: { xs: "19.8%", sm: "18%", md: "16%", xl: "15%" },
  left: { xs: "20.5%", md: "16.5%", lg: "14.5%", xl: "12.5%" },
};

export const skipButtonStyle = {
  color: "white",
  transform: { sm: "scale(1.4)", lg: "scale(1)" },
};

export const favoriteStyle = {
  position: "absolute",
  bottom: { xs: "15%", sm: "12%", md: "10%" },
  left: { xs: "23%", md: "28%", lg: "31%", xl: "34%" },
  color: "white",
  fontSize: {
    xs: "0.9rem",
    sm: "1.2rem",
    lg: "1rem",
  },
};
