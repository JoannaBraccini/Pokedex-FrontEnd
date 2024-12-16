export const getStyle = (backgroundImage: string) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: { xs: "-50px", lg: "-3rem bottom" },
  height: "calc(100vh - 6rem)",
  paddingTop: "1rem",
  boxShadow: "0px -3px 6px 0px rgba(116, 105, 88, 0.8)",
});
