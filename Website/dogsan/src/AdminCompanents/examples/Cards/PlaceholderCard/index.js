

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "../../../components/SuiBox";
import SuiTypography from "../../../components/SuiTypography";

function PlaceholderCard({ icon, title, hasBorder, outlined }) {
  return (
    <Card
      raised
      sx={({ borders: { borderWidth, borderColor } }) => ({
        height: "100%",
        backgroundColor: outlined && "transparent",
        boxShadow: outlined && "none",
        border: hasBorder || outlined ? `${borderWidth[1]} solid ${borderColor}` : "none",
      })}
    >
      <SuiBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        height="100%"
        p={3}
      >
        <SuiBox color="secondary" mb={0.5}>
          <Icon fontSize="default" sx={{ fontWeight: "bold" }}>
            {icon}
          </Icon>
        </SuiBox>
        <SuiTypography variant={title.variant} color="secondary">
          {title.text}
        </SuiTypography>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of PlaceholderCard
PlaceholderCard.defaultProps = {
  icon: "add",
  hasBorder: false,
  outlined: false,
};

// Typechecking props for the PlaceholderCard
PlaceholderCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  hasBorder: PropTypes.bool,
  outlined: PropTypes.bool,
};

export default PlaceholderCard;
