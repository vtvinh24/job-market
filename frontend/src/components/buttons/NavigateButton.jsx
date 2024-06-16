import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NavigateButton = ({ path, text, variant }) => {
  const navigate = useNavigate();
  return (
    <Button variant={variant} onClick={() => navigate(path)}>
      {text}
    </Button>
  );
};

export default NavigateButton;