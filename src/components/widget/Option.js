import React from "react";
import { TEXTS } from "@toannb/components/widget";
import { OnlineUser } from "@toannb/common";

const checkOnlineValue = (value, item) => {
  return value === "online" ? (
    <OnlineUser
      className={`online-user-wrapper`}
      src={item?.icon}
      size={30}
      title={item?.text}
    />
  ) : (
    <img
      className={`widget__option-icon widget-icon-${item?.iconClass}`}
      src={item?.icon}
      alt={item?.title}
      loading="lazy"
    />
  );
};

function Option({ type, item, value }) {
  return (
    <a href="#">
      <div
        className={`widget__option widget__option-${item?.class} ${
          type === "option" ? "" : "widget__option-item"
        }`}
        title={item?.title}
      >
        <div className="widget__option-wrapper">
          <div className="widget__option-icon-wrapper">
            {type === "option" ? (
              checkOnlineValue(value, item)
            ) : (
              <i
                className={`widget__option-item-icon widget-icon-${item?.iconClass}`}
                style={{
                  backgroundImage: `url(${item.icon})`,
                  backgroundPosition: item?.iconPosition,
                  backgroundSize: item?.iconSize,
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  width: item?.size,
                  height: item?.size,
                }}
              />
            )}
          </div>
          <div
            className={`widget__option${
              type === "option" ? "-text-wrapper" : "-item-text-wrapper"
            } widget-text-wrapper`}
          >
            <span>{item?.text}</span>
            {item?.extraText && (
              <div className="widget__option-text-info-wrapper">
                <i className="text-info-dot" />
                <span className="widget__option-text-info widget-text-info">
                  {item?.extraText}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

function OptionFriendRequest({ item }) {
  return (
    <a href="#">
      <div
        className={`widget__option
        widget__option-friend-request`}
      >
        <div className="widget__option-wrapper">
          <div className="widget__option-icon-wrapper">
            <img
              className={`widget__option-icon widget-icon-${item.iconClass}`}
              src={item.avatar}
              alt={item.user}
              loading="lazy"
            />
          </div>
          <div className={`widget__option-text-wrapper widget-text-wrapper`}>
            <div
              className="friend-request__option-text-wrapper"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span>{item.user}</span>
              <span>{item.time}</span>
            </div>
            <div className="widget__option-confirmation-btn">
              <div className="widget__option-confirm-btn">
                {TEXTS.btnConfirm}
              </div>
              <div className="widget__option-delete-btn">{TEXTS.btnDelete}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function OptionBirthday({ item }) {
  return (
    <a href="#">
      <div
        className={`widget__option
        widget__option-friend-request`}
      >
        <div className="widget__option-wrapper">
          <div className="widget__option-icon-wrapper">
            <img
              className={`widget__option-icon widget-icon-${item.iconClass}`}
              src={item.icon}
              alt={item.title}
              loading="lazy"
            />
          </div>
          <div className={`widget__option-text-wrapper widget-text-wrapper`}>
            <span>
              {item.text}&nbsp;
              {item.people.map((p, i) => (
                <b key={i}>{p}</b>
              ))}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export { Option, OptionFriendRequest, OptionBirthday };
