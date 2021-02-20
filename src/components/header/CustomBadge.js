import React from "react";
import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -5,
    top: -6,
    padding: "0 4px",
  },
}))(Badge);

function CustomBadge({ component, content, color }) {
  return (
    <StyledBadge badgeContent={content} color={color}>
      {component}
    </StyledBadge>
  );
}

export { CustomBadge };
