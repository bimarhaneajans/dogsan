import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

import { useSelector, useDispatch } from "react-redux";
import { LAYOUT } from "redux/actions/types";

function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  const { miniSidenav } = useSelector((state) => state.admin);

  const { pathname } = useLocation();

  useEffect(() => {
    // setLayout(dispatch, "dashboard");

    dispatch({ type: LAYOUT, value: "dashboard" });
  }, [pathname, dispatch]);

  return (
    <SuiBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </SuiBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
