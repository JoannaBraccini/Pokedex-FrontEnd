import bgPokedex from "../../assets/bgPokedex.png";

export const cardStyle = {
  width: 300,
  height: "100%",
  mx: { xs: "auto", md: 5 },
  p: 2,
  border: "4px solid #521605",
  backgroundColor: "#f8f7e5",
};

export const cardMediaStyle = {
  backgroundImage: `url(${bgPokedex})`,
  border: "2px solid #521605",
};

export const buttonStyle = {
  border: "2px solid #521605",
  color: "white",
  backgroundColor: "#FD0100",
  "&:hover": { backgroundColor: "#A32B13" },
};
