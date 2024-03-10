import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

const Logo = forwardRef(
  ({ disabledLink = false }: { disabledLink?: Boolean }) => {
    const navigate = useNavigate();
    return (
      <img
        onClick={() => {
          if (disabledLink) {
            navigate("/");
          }
        }}
        alt="logo"
        src={`./images/logo.png`}
        style={{ height: 40, cursor: "pointer" }}
      />
    );
  }
);

export default Logo;
