import { Box, Button, styled } from "@mui/material";
import bgPoke from "/bgPokebolaVertical.jpeg";

export const StyledBox = styled(Box)({
  maxWidth: "xl",
  height: "100vh",
  background: `url(${bgPoke}) center`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
});

export const StyledText = styled("h1")({
  color: "whitesmoke",
  textAlign: "center",
  fontSize: "3rem",
  fontWeight: 800,
});

export const PokeButton = styled(Button)({
  display: "block",
  width: "192px",
  height: "192px",
  background: `radial-gradient(
    white 16px, 
    black 17px 18px, 
    white 19px 24px, 
    black 25px 32px, 
    transparent 33px
  ), linear-gradient(to bottom, red 0 80px, black 81px 96px, white 97px 100%)`,
  borderRadius: "50%",
  border: "8px solid black",
  boxShadow: "inset -16px -8px 0 0 rgba(0, 0, 0, 0.2)",
  animation: "fall 0.5s ease-in-out 1s, bounce 1s ease-in-out infinite",
  "&:hover": {
    cursor: "pointer", // Para adicionar interatividade
  },

  // Keyframe de animação fall
  "@keyframes fall": {
    "0%": {
      transform: "translateY(-200%)",
    },
    "60%": {
      transform: "translateY(0)",
    },
    "80%": {
      transform: "translateY(-10%)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },

  // Keyframe de animação de quique
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "20%": {
      transform: "translateY(-30px)",
    },
    "40%": {
      transform: "translateY(15px)",
    },
    "60%": {
      transform: "translateY(-15px)",
    },
    "80%": {
      transform: "translateY(5px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
});
