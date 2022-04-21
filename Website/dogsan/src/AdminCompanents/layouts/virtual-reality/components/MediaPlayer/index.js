

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "../../../../components/SuiBox";
import SuiTypography from "../../../../components/SuiTypography";
import SuiButton from "../../../../components/SuiButton";

// Images
import curved1 from "../../../../assets/images/curved-images/curved1.jpg";

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.85),
          rgba(gradients.dark.state, 0.85)
        )}, url(${curved1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <SuiBox p={3} position="relative" lineHeight={0}>
        <SuiTypography variant="h5" color="white" fontWeight="medium">
          Some Kind Of Blues
        </SuiTypography>
        <SuiTypography variant="button" color="white" fontWeight="regular">
          Deftones
        </SuiTypography>
        <SuiBox display="flex" mt={6} pt={1}>
          <SuiBox display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Prev" placement="top">
              <SuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_previous</Icon>
              </SuiButton>
            </Tooltip>
            <Tooltip title="Pause" placement="top">
              <SuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>play_arrow</Icon>
              </SuiButton>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <SuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_next</Icon>
              </SuiButton>
            </Tooltip>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default MediaPlayer;
