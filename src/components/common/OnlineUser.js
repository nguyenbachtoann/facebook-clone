import React from "react";
import PropTypes from "prop-types";

const online = (size) => {
  return {
    display: "inline-flex",
    height: `calc(${size}px / 5)`,
    width: `calc(${size}px / 5)`,
    right: 0,
    bottom: 2,
    borderRadius: "50%",
    border: "2px solid white",
    backgroundColor: "#30a24c",
    position: "absolute",
  };
};

const wrapper = (size) => {
  return {
    position: "relative",
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "cover",
  };
};

function OnlineUser({ src, size, className, title, style }) {
  return (
    <div className={className}>
      <div style={{ position: "relative" }}>
        <img
          src={src}
          alt={title}
          style={{ ...wrapper(size), ...style }}
          className="online-user-avatar"
          loading="lazy"
        />
        <span style={{ ...online(size) }} />
      </div>
    </div>
  );
}

OnlineUser.defaultProps = {
  size: 20,
  color: "#000000",
  style: {},
  className: "",
};

OnlineUser.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
};

export { OnlineUser };
