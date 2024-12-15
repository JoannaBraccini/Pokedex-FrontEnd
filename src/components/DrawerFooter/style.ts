import pikIndica from "../../assets/pikIndica.png";

export const style = {
  position: "fixed",
  bottom: 0,
  left: 0,
  height: { xs: 240, md: 300, lg: 380 },
  width: { xs: 320, md: 400, lg: 524 },
  backgroundImage: `url(${pikIndica})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "8%",
};

export const socialButtonStyle = {
  position: "absolute",
  top: "15px",
  left: "65%",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export const linkStyle = {
  color: "inherit",
  fontSize: { xs: 22, md: 30, lg: 40 },
  textDecoration: "none",
  "&:hover": { color: "#A12D16", fontWeight: 600 },
};
