import React from "react";
import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

function Icon({ icon, color, size, style, className, viewBox, title }) {
  const styles = { ...defaultStyles, ...style };
  return (
    <svg
      className={className}
      style={styles}
      width={`${size}px`}
      heigh={`${size}px`}
      viewBox={viewBox}
      title={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d={icon} fill={color} />
    </svg>
  );
}

Icon.defaultProps = {
  size: 20,
  color: "#000000",
  style: {},
  className: "",
  viewBox: "0 0 28 28",
};

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export { Icon };
