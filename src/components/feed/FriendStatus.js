import React, { useState } from "react";
import { OnlineUser, Icon, TooltipInner, StyledTooltip } from "../common";
import { TEXTS, ONLINE_FRIENDS } from "./Constants";
import { I_FS_GO_PREV, I_FS_GO_NEXT } from "../../assets/images/svg";
import { iconSecondaryColor } from "../../styles/style";

function FriendStatus() {
  const [touchedLeft, setTouchedLeft] = useState(false);
  const [touchedRight, setTouchedRight] = useState(false);

  const styleWidth = 500;
  const leftPadding = 16;

  const showNavigate = (e) => {
    const left = e.target.scrollLeft;
    const scrollWidth = e.target.scrollWidth;
    const right = scrollWidth - left;
    setTouchedLeft(left >= leftPadding);
    setTouchedRight(right <= styleWidth);
  };

  const displayNone = {
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.2s ease-out",
  };
  const displayFlex = {
    opacity: 1,
    visibility: "visible",
    transition: "all 0.2s ease-in",
  };

  return (
    <div className="feed__friend-status" onScroll={showNavigate}>
      <div className="feed__friend-status-wrapper">
        <div className="friend-status__create-meeting">
          <div className="create-meeting__btn">
            <i className="create-meeting__btn-icon" />
          </div>
          <span>{TEXTS.friendStatusCreateMeeting}</span>
        </div>
        {ONLINE_FRIENDS &&
          ONLINE_FRIENDS.map((item, i) => (
            <StyledTooltip
              key={i}
              title={TooltipInner(TEXTS.friendStatusSendGreeting, item.text)}
              PopperProps={{
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
              }}
            >
              <div>
                <OnlineUser
                  className="online-user-wrapper"
                  src={item.icon}
                  size={40}
                />
              </div>
            </StyledTooltip>
          ))}
      </div>

      <div
        className={`friend-status__go-prev`}
        style={touchedLeft ? displayFlex : displayNone}
      >
        <Icon
          className="friend-status__go-prev-icon"
          viewBox="0 0 20 20"
          icon={I_FS_GO_PREV}
          size={24}
          color={iconSecondaryColor}
        />
      </div>
      <div
        className={`friend-status__go-next `}
        style={touchedRight ? displayNone : displayFlex}
      >
        <Icon
          className="friend-status__go-next-icon"
          viewBox="0 0 20 20"
          icon={I_FS_GO_NEXT}
          size={24}
          color={iconSecondaryColor}
        />
      </div>
    </div>
  );
}

export { FriendStatus };
