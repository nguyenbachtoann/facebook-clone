import React, { useState, useEffect } from "react";
import { FEED_STORIES_INFO, TEXTS } from "./Constants";
import { TooltipInner, StyledTooltip, popperProps } from "../common";

import { Story } from "./Story";

function StoryReel() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setAvatar(JSON.parse(localStorage.getItem("user")).avatar);
  }, [avatar, setAvatar]);
  return (
    <div className="feed__story-reel">
      <div className="feed__story-reel-wrapper">
        <div className="story-reel__item story-reel__item-owner">
          <div className="story__item-owner-avatar-wrapper">
            <div
              className="story__item-owner-avatar"
              style={{ backgroundImage: `url(${avatar})` }}
            />
          </div>
          <div className="story__item-owner-create" title="Create">
            <div className="story__item-owner-create-btn-round">
              <i className="story__item-owner-create-icon" />
            </div>
            <span className="story__item-owner-create-text">
              {TEXTS.createStory}
            </span>
          </div>
        </div>
        {FEED_STORIES_INFO &&
          FEED_STORIES_INFO.map((item, i) => <Story item={item} key={i} />)}
        <StyledTooltip
          title={TooltipInner(TEXTS.storyGo)}
          PopperProps={popperProps}
        >
          <div className="story-reel__go-btn">
            <i className="story__go-btn-icon" />
          </div>
        </StyledTooltip>
      </div>
    </div>
  );
}

export { StoryReel };
