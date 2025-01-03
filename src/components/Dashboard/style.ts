import bgBox from "/bgdashboardDetails.svg";

export const BoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  minHeight: 140,
  borderRadius: 4,
  py: 1,
  px: 5,
  overflow: "hidden",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url(${bgBox}) center center / contain no-repeat, rgba(0, 0, 0, 0.2)`,
    backgroundSize: "100%",
    opacity: 0.3,
    zIndex: 1,
  },
};
