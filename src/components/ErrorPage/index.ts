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
  animation:
    "fall 0.5s ease-in-out 1s, shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 1.5s 3, catch 0.5s ease-out 5.25s forwards",
  "&:hover": {
    cursor: "pointer", // Para adicionar interatividade
  },

  // Keyframe de animação shake
  "@keyframes shake": {
    "0%": {
      transform: "translateX(0) rotate(0)",
    },
    "20%": {
      transform: "translateX(-10px) rotate(-20deg)",
    },
    "30%": {
      transform: "translateX(10px) rotate(20deg)",
    },
    "50%": {
      transform: "translateX(-10px) rotate(-10deg)",
    },
    "60%": {
      transform: "translateX(10px) rotate(10deg)",
    },
    "100%": {
      transform: "translateX(0) rotate(0)",
    },
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

  // Keyframe de animação catch
  "@keyframes catch": {
    to: {
      filter: "saturate(0.8) brightness(0.8)",
    },
  },
});
