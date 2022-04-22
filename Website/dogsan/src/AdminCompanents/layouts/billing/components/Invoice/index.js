

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "../../../../components/SuiBox";
import SuiTypography from "../../../../components/SuiTypography";

function Invoice({ date, id, price, noGutter }) {
  return (
    <SuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <SuiBox lineHeight={1}>
        <SuiTypography display="block" variant="button" fontWeight="medium">
          {date}
        </SuiTypography>
        <SuiTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </SuiTypography>
      </SuiBox>
      <SuiBox display="flex" alignItems="center">
        <SuiTypography variant="button" fontWeight="regular" color="text">
          {price}
        </SuiTypography>
        <SuiBox display="flex" alignItems="center" lineHeight={0} ml={3} sx={{ cursor: "poiner" }}>
          <Icon fontSize="small">picture_as_pdf</Icon>
          <SuiTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
