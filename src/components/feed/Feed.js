import React from "react";
import "./style.scss";
import { Story } from "./Story";
import { Status } from "./Status";
import { FriendStatus } from "./FriendStatus";
import { Post } from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Story />
        <Status />
        <FriendStatus />
        <Post />
      </div>
    </div>
  );
}

export { Feed };
