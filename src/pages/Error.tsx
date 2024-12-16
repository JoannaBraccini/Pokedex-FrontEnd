import { useNavigate } from "react-router";
import { PokeButton, StyledBox, StyledText } from "../components/ErrorPage";

export function Error() {
  const navigate = useNavigate();
  return (
    <StyledBox>
      <StyledText>Ops!</StyledText>
      <PokeButton
        onClick={() => {
          navigate("/");
        }}
      />
      <StyledText>Vamos voltar?</StyledText>
    </StyledBox>
  );
}
