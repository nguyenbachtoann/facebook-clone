import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const StyledTooltip = withStyles({
  tooltip: {
    margin: "4px 0",
    background: "rgba(0, 0, 0, 0.8)",
    borderRadius: 8,
    boxShadow:
      "rgba(0, 0, 0, 0.20) 0px 2px 6px, rgba(0, 0, 0, 0.30) 0px 2px 6px;",
  },
})(Tooltip);

const TooltipInner = (text, title) => (
  <div className="tooltip-inner">
    {title && <span className="inner-title">{title}</span>}
    {text && <span className="inner-text">{text}</span>}
  </div>
);

export const popperProps = {
  disablePortal: true,
  popperOptions: {
    positionFixed: true,
    modifiers: {
      preventOverflow: {
        enabled: true,
        boundariesElement: "window", // where "window" is the boundary
      },
    },
  },
};

TooltipInner.defaultProps = {
  title: "tool tip",
  text: null,
};

TooltipInner.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
};

export { TooltipInner, StyledTooltip };
