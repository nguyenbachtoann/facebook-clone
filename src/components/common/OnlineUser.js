import React from "react";
import { Avatar } from "@material-ui/core";

const online = (onlineDotSize) => {
  return {
    display: "inline-flex",
    height: onlineDotSize,
    width: onlineDotSize,
    right: 0,
    bottom: -1,
    borderRadius: "50%",
    border: "2px solid white",
    backgroundColor: "#30a24c",
    position: "absolute",
  };
};

function OnlineUser({ src, size, onlineDotSize, dotStyles, className, title }) {
  return (
    <div className={className}>
      <div style={{ position: "relative" }}>
        <Avatar
          className="online-user-avatar"
          src={src}
          sizes={`${size}`}
          title={title}
        />
        <span style={{ ...online(onlineDotSize), ...dotStyles }} />
      </div>
    </div>
  );
}

export { OnlineUser };
