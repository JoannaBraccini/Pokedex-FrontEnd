import bgPokebola from "/bgPokebola.jpeg";

export const appStyle = {
  position: "static",
  backgroundImage: `url(${bgPokebola})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "5.5rem",
};

export const pokeMdStyle = {
  color: "white",
  display: { xs: "none", md: "flex" },
};

export const pokeXsStyle = {
  color: "white",
  display: { xs: "flex", md: "none" },
};

export const imgMdStyle = {
  mr: 1,
  mb: 1,
  height: "80px",
  width: "auto",
  display: { xs: "none", md: "flex" },
};

export const imgXsStyle = {
  mr: 10,
  mb: 1,
  height: "70px",
  width: "auto",
  display: { xs: "flex", md: "none" },
};
export const boxXsStyle = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};

export const boxMdStyle = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
};

export const iconStyle = {
  backgroundColor: "black",
  "&:hover": { backgroundColor: "#FE0000" },
};

export const buttonStyle = {
  my: 2,
  color: "white",
  display: "block",
  backgroundColor: "black",
  p: "5px 15px",
};
