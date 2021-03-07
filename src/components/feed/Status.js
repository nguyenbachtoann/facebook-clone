import React, { useState, useEffect } from "react";
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
  const [profile, setProfile] = useState(null);
  const handleGetUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { profile } = user.additionalUserInfo;
    setProfile(profile);
  };

  useEffect(() => {
    handleGetUser();
  }, []);
  return (
    <div className="feed__status">
      <div className="feed__status-wrapper">
        <div className="status__action-wrapper">
          <div className="status__avatar-wrapper">
            <Avatar
              src={profile && profile.picture.data.url}
              sizes="40"
              alt="Avatar"
              className="status__avatar"
            />
          </div>
          <label className="status__label">
            <span>
              {TEXTS.statusPlaceHolder}
              {profile && profile.first_name}?
            </span>
          </label>
        </div>
        <Divider />
        <div className="status__option-wrapper">
          <div className="status__option-container">
            {POST_ACTION_INFO &&
              POST_ACTION_INFO.map((item, i) => (
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
