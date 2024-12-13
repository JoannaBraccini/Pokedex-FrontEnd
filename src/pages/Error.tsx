import { Box, Button, styled } from "@mui/material";
import bgBlack from "../assets/bgBlack.jpeg";
import { useNavigate } from "react-router";

// Estilizando o botão com o efeito "glow-on-hover"
const StyledButton = styled(Button)({
  position: "relative",
  width: "110px",
  height: "110px",
  border: "none",
  outline: "none",
  color: "#fff",
  background: "#111",
  cursor: "pointer",
  zIndex: 0,
  borderRadius: "50%",
  overflow: "visible",
  fontSize: "16px",
  fontWeight: "bold",
  letterSpacing: 3,
  textTransform: "none",

  "&:before": {
    content: '""',
    background:
      "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    backgroundSize: "400%",
    zIndex: -1,
    filter: "blur(5px)",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: "glowing 20s linear infinite",
    opacity: 0,
    transition: "opacity .3s ease-in-out",
    borderRadius: "50%",
  },

  "&:hover:before": {
    opacity: 1,
  },

  "&:after": {
    zIndex: -1,
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#111",
    left: 0,
    top: 0,
    borderRadius: "50%",
  },

  "&:active": {
    color: "#000",
  },

  "&:active:after": {
    background: "transparent",
  },

  "@keyframes glowing": {
    "0%": { backgroundPosition: "0 0" },
    "50%": { backgroundPosition: "400% 0" },
    "100%": { backgroundPosition: "0 0" },
  },
});

export function Error() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        background: `url(${bgBlack}) center`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledButton
        onClick={() => {
          navigate("/");
        }}
      >
        VOLTAR
      </StyledButton>
    </Box>
  );
}
