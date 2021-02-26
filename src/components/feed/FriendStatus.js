import React from "react";
import { OnlineUser } from "../common/OnlineUser";
import { TEXTS, ONLINE_FRIENDS } from "./Constants";

function FriendStatus() {
  return (
    <div className="feed__friend-status">
      <div className="feed__friend-status-wrapper">
        <div className="friend-status__create-meeting">
          <div className="create-meeting__btn">
            <i className="create-meeting__btn-icon" />
          </div>
          <span>{TEXTS.friendStatusCreateMeeting}</span>
        </div>
        {ONLINE_FRIENDS &&
          ONLINE_FRIENDS.map((item, i) => (
            <OnlineUser
              className="online-user-wrapper"
              src={item.avatar}
              sizes={24}
              onlineDotSize={9}
              title={item.user}
              key={i}
            />
          ))}
      </div>
      <div className="friend-status__go-next">
        <i className="friend-status__go-next-icon" />
      </div>
    </div>
  );
}

export { FriendStatus };
