import React from "react";

function Story({ item, className }) {
  return (
    <div className={`story-reel__item ${className}`}>
      <div
        className="story__item-wrapper"
        style={{
          backgroundImage: `url(${item.storyMedia})`,
        }}
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
}

export { Story };
