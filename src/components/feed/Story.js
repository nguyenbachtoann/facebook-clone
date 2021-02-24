import React from "react";
import "./style.scss";
import { FEED_STORIES_INFO } from "./Constants";
import avatar from "../../assets/images/avatar.jpg";

const TEXTS = {
  createStory: "Tạo tin",
};
function Story() {
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
        {FEED_STORIES_INFO.map((item, i) => {
          return (
            <div className="story-reel__item" key={i}>
              <div
                className="story__item-wrapper"
                style={{ backgroundImage: `url(${item.storyMedia})` }}
              />
              <div
                className="story__item-avatar"
                style={{ backgroundImage: `url(${item.avatar})` }}
              />
              <div className="story__item-username">
                <span>{item.user}</span>
              </div>
            </div>
          );
        })}
        <div className="story-reel__go-btn">
          <i className="story__go-btn-icon" />
        </div>
      </div>
    </div>
  );
}

export { Story };
