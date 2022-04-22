
import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Soft UI Dashboard React components
import SuiBox from "../SuiBox";

// Custom styles for the SuiAlert
import SuiAlertRoot from "../SuiAlert/SuiAlertRoot";
import SuiAlertCloseIcon from "../SuiAlert/SuiAlertCloseIcon";

function SuiAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <SuiAlertRoot ownerState={{ color }} {...rest}>
        <SuiBox display="flex" alignItems="center" color="white">
          {children}
        </SuiBox>
        {dismissible ? (
          <SuiAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</SuiAlertCloseIcon>
        ) : null}
      </SuiAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of SuiAlert
SuiAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the SuiAlert
SuiAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SuiAlert;
