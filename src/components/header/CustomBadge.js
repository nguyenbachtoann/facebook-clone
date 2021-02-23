import React from "react";
import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledNotificationBadge = withStyles((theme) => ({
  badge: {
    right: -5,
    top: -6,
    padding: "0 4px",
  },
}))(Badge);
const StyledMenuBadge = withStyles((theme) => ({
  badge: {
    right: -5,
    top: 2,
    padding: "0 5px",
    fontSize: 13,
    fontWeight: 500,
  },
}))(Badge);

function NotificationBadge({ component, content, color }) {
  return (
    <StyledNotificationBadge badgeContent={content} color={color}>
      {component}
    </StyledNotificationBadge>
  );
}
function MenuBadge({ component, content, color }) {
  return (
    <StyledMenuBadge badgeContent={content} color={color}>
      {component}
    </StyledMenuBadge>
  );
}

export { NotificationBadge, MenuBadge };
