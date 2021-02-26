import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import { Avatar } from "@material-ui/core";
import { TEXTS, POST_ACTION_INFO } from "./Constants";

const Divider = () => <div className="status__divider divider" />;

const statusIconStyle = (item) => {
  return {
    backgroundImage: `url(${item.icon})`,
    backgroundPosition: item.iconPosition,
    backgroundSize: "49px 432px",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    width: item.size,
    height: item.size,
  };
};

function Status() {
  return (
    <div className="feed__status">
      <div className="feed__status-wrapper">
        <div className="status__action-wrapper">
          <div className="status__avatar-wrapper">
            <Avatar
              src={avatar}
              sizes="40"
              alt="Avatar"
              className="status__avatar"
            />
          </div>
          <label className="status__label">
            <span>{TEXTS.statusPlaceHolder}</span>
          </label>
        </div>
        <Divider />
        <div className="status__option-wrapper">
          <div className="status__option-container">
            {POST_ACTION_INFO.map((item, i) => (
              <div
                className={`status__option status__option-${item.wrapClassName}`}
                key={i}
              >
                <div className="icon-wrapper">
                  <i
                    className={`status__option-${item.iconClassName} status__icon`}
                    style={statusIconStyle(item)}
                  />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Status };
