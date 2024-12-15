import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { linkStyle, socialButtonStyle, style } from "./style";

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
              sx={linkStyle}
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/joannabraccini/"
              target="_blank"
              sx={linkStyle}
            >
              LinkedIn
            </Link>
            <Link href="#" target="_blank" sx={linkStyle}>
              Portfolio
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
