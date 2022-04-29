const initialState = {
  miniSidenav: false,
  transparentSidenav: true,
  sidenavColor: "info",
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  direction: "ltr",
  layout: "dashboard",
};

export default function adminReducer(state = initialState, action) {
  const { value, type } = action;

  switch (type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: value };
    }
    case "DIRECTION": {
      return { ...state, direction: value };
    }
    case "LAYOUT": {
      return { ...state, layout: value };
    }
    default: {
      return state;
    }
  }
}

// const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
// const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
// const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
// const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
// const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
// const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
// const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
// const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });

// export {
//   SoftUIControllerProvider,
//   useSoftUIController,
//   setMiniSidenav,
//   setTransparentSidenav,
//   setSidenavColor,
//   setTransparentNavbar,
//   setFixedNavbar,
//   setOpenConfigurator,
//   setDirection,
//   setLayout,
// };
