
// Soft UI Dashboard React helper functions
import hexToRgb from "./hexToRgb";

function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
