import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NavigateButton = ({ path, text, variant, confirm, confirmMsg }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant={variant}
      onClick={() => {
        if (confirm) {
          const confirmNavigate = window.confirm(confirmMsg);
          if (!confirmNavigate) {
            return;
          }
        }
        navigate(path);
      }}
    >
      {text}
    </Button>
  );
};

export default NavigateButton;
