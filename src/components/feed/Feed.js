import React from "react";
import "./style.scss";
import "./styleStory.scss";
import "./styleStatus.scss";
import "./styleFriendStatus.scss";
import "./stylePost.scss";
import { StoryReel, Status, FriendStatus, Post } from "@toannb/components/feed";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <StoryReel />
        <Status />
        <FriendStatus />
        <Post />
        <div className="pseudo-footer" style={{ marginBottom: 100 }} />
      </div>
    </div>
  );
}

export { Feed };
