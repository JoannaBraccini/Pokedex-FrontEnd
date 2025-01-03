import bgBox from "/bgdashboardDetails.svg";

export const BoxStyle = {
  position: "relative",
  height: 240,
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
    background: `url(${bgBox}) center center / contain no-repeat`,
    opacity: 0.24,
    zIndex: 1,
  },
};
