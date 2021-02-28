import React from "react";
import "./style.scss";
import "./styleStory.scss";
import "./styleStatus.scss";
import "./styleFriendStatus.scss";
import { StoryReel } from "./StoryReel";
import { Status } from "./Status";
import { FriendStatus } from "./FriendStatus";
import { Post } from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <StoryReel />
        <Status />
        <FriendStatus />
        <Post />
      </div>
    </div>
  );
}

export { Feed };
