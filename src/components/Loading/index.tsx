import { CircularProgress, Typography, Box } from "@mui/material";

export function Loading() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="error" />
      <Typography variant="button" sx={{ fontSize: 18, color: "white" }}>
        Aguarde...
      </Typography>
    </Box>
  );
}
