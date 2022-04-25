
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "../../../../components/SuiBox";
import SuiTypography from "../../../../components/SuiTypography";

function TodoList() {
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox p={3}>
        <SuiBox display="flex" lineHeight={1}>
          <SuiBox mr={2}>
            <SuiTypography variant="h6" fontWeight="medium">
              08:00
            </SuiTypography>
          </SuiBox>
          <SuiBox>
            <SuiTypography variant="h6" fontWeight="medium">
              Synk up with Mark
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" color="secondary">
              Hangouts
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <Divider />
        <SuiBox display="flex" lineHeight={0}>
          <SuiBox mr={2}>
            <SuiTypography variant="h6" fontWeight="medium">
              09:30
            </SuiTypography>
          </SuiBox>
          <SuiBox>
            <SuiTypography variant="h6" fontWeight="medium">
              Gym
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" color="secondary">
              World Class
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <Divider />
        <SuiBox display="flex" lineHeight={1}>
          <SuiBox mr={2}>
            <SuiTypography variant="h6" fontWeight="medium">
              11:00
            </SuiTypography>
          </SuiBox>
          <SuiBox>
            <SuiTypography variant="h6" fontWeight="medium">
              Design Review
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" color="secondary">
              Zoom
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <SuiBox bgColor="grey-100" mt="auto">
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <SuiBox textAlign="center" py={0.5} color="info" lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </SuiBox>
        </Tooltip>
      </SuiBox>
    </Card>
  );
}

export default TodoList;
