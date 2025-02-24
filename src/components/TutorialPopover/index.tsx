import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import {
  boxStyle,
  buttonNextStyle,
  buttonNoStyle,
  buttonYesStyle,
} from "./style";

interface TutorialPopoverProps {
  steps: { selector: string; content: string }[];
  tutorialKey?: string; // Identificador único para o tutorial
}

export default function TutorialPopover({
  steps,
  tutorialKey = "defaultTutorial",
}: TutorialPopoverProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [step, setStep] = React.useState<number>(-1);
  const [showTutorial, setShowTutorial] = React.useState<boolean>(false);

  React.useEffect(() => {
    const tutorialSeen = localStorage.getItem("tutorialSeen");
    if (!tutorialSeen) {
      setShowTutorial(true);
      setStep(-1);
      setAnchorEl(document.body); // Ancorar o popover na tela inicial
    }
  }, [tutorialKey]);

  const handleNext = () => {
    const nextStep = step + 1;
    if (nextStep < steps.length) {
      const element = document.querySelector(
        steps[nextStep].selector
      ) as HTMLElement;
      if (element) {
        setStep(nextStep);
        setAnchorEl(element); // Ancorar o Popover no próximo elemento
      } else {
        console.error(
          `Elemento com seletor "${steps[nextStep].selector}" não encontrado.`
        );
        finishTutorial();
      }
    } else {
      finishTutorial();
    }
  };

  const finishTutorial = () => {
    localStorage.setItem(tutorialKey, "true"); // Marca como visto //setar para global?
    setShowTutorial(false);
    setAnchorEl(null);
  };

  return (
    <>
      {showTutorial && anchorEl && (
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <Paper elevation={3} sx={{ padding: 2 }}>
            {step === -1 ? (
              <Box>
                <Typography>Você gostaria de ver o tutorial?</Typography>
                <Box sx={boxStyle}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="inherit"
                    sx={buttonNoStyle}
                    onClick={finishTutorial}
                  >
                    Não
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleNext}
                    sx={buttonYesStyle}
                  >
                    Sim
                  </Button>
                </Box>
              </Box>
            ) : (
              <div>
                <Typography>{steps[step]?.content}</Typography>
                <div style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    sx={buttonNextStyle}
                    onClick={handleNext}
                  >
                    {step < steps.length - 1 ? "Próximo" : "Finalizar"}
                  </Button>
                </div>
              </div>
            )}
          </Paper>
        </Popover>
      )}
    </>
  );
}
