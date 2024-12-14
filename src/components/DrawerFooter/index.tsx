import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import pikIndica from "../../assets/pikIndica.png";

const style = {
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

const socialButtonStyle = {
  position: "absolute",
  top: "15px",
  left: "65%",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export function SocialMenu() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <IconButton id="social-button" color="inherit" onClick={handleOpenModal}>
        <MenuIcon />
      </IconButton>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Box sx={socialButtonStyle}>
            <Link
              href="https://github.com/JoannaBraccini"
              target="_blank"
              sx={{
                color: "inherit",
                fontSize: { xs: 22, md: 30, lg: 40 },
                textDecoration: "none",
                "&:hover": { color: "#A12D16", fontWeight: 600 },
              }}
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/joannabraccini/"
              target="_blank"
              sx={{
                color: "inherit",
                fontSize: { xs: 22, md: 30, lg: 40 },
                textDecoration: "none",
                "&:hover": { color: "#A12D16", fontWeight: 600 },
              }}
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              target="_blank"
              sx={{
                color: "inherit",
                fontSize: { xs: 22, md: 30, lg: 40 },
                textDecoration: "none",
                "&:hover": { color: "#A12D16", fontWeight: 600 },
              }}
            >
              Portfolio
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
