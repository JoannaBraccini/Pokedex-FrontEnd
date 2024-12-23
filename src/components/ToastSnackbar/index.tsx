import { Alert, Box, LinearProgress, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { hiddenAlert } from "../../store/modules/alert/AlertSlice";
import { useEffect, useState } from "react";

export default function ToastSnackbar() {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.alert);
  const [progress, setProgress] = useState(100);

  function handleClose() {
    dispatch(hiddenAlert());
    setProgress(100);
  }

  useEffect(() => {
    if (!alert.open) {
      setProgress(100); // Reseta o progresso quando o alerta não está ativo
      return;
    }

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const decrement = 100 / (2600 / 100);
        return Math.max(oldProgress - decrement, 0); // Evita valores negativos
      });
    }, 100);

    const timeout = setTimeout(() => {
      handleClose(); // Fecha o alerta automaticamente após 3 segundos
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.open]);

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <Alert
          onClose={handleClose}
          severity={alert.type}
          variant="filled"
          sx={{
            width: "100%",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          {alert.message}
        </Alert>
        <LinearProgress
          variant="determinate"
          color={alert.type}
          value={progress}
        />
      </Box>
    </Snackbar>
  );
}
