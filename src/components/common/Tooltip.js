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
  },
})(Tooltip);

const TooltipInner = (text, title) => (
  <div className="tooltip-inner">
    {title && <span className="inner-title">{title}</span>}
    {text && <span className="inner-text">{text}</span>}
  </div>
);

TooltipInner.defaultProps = {
  title: "tool tip",
  text: null,
};

TooltipInner.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
};

export { TooltipInner, StyledTooltip };
