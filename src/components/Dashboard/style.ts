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
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url(${bgBox}) center center / contain no-repeat`,
    backgroundSize: "100%",
    opacity: 0.2,
    zIndex: 1,
  },
};
