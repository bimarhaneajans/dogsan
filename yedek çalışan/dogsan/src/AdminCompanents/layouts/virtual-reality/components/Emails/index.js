
// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "../../../../components/SuiBox";
import SuiTypography from "../../../../components/SuiTypography";

function Emails() {
  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <SuiTypography variant="body2" color="text">
          Emails (21)
        </SuiTypography>
        <Tooltip title="Check your emails" placement="top">
          <SuiBox component="a" href="#">
            <SuiTypography variant="body2">Check</SuiTypography>
          </SuiBox>
        </Tooltip>
      </SuiBox>
    </Card>
  );
}

export default Emails;
