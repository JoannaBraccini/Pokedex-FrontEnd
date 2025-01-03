export const getStyle = (backgroundImage: string) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "auto",
  backgroundPosition: "left bottom",
  backgroundRepeat: "repeat-y",
  minHeight: "calc(100vh - 6rem)",
  paddingTop: "1rem",
  boxShadow: "0px -3px 6px 0px rgba(116, 105, 88, 0.8)",
});
