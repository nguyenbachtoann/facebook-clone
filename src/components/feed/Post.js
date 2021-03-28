import React from "react";
import { Avatar } from "@material-ui/core";
import { StyledTooltip, TooltipInner, popperProps } from "@toannb/common";
import { PostEmoji, POSTS } from "@toannb/components/feed";
import {
  likePng128,
  lovePng128,
  hahaPng128,
} from "@toannb/assets/reactions-emoticons/png-128";
const PostItem = ({ post }) => (
  <div className="post__item">
    <div className="post__item-metadata">
      <div className="post__avatar-wrapper">
        <Avatar
          src={post?.profile && post.profile.icon}
          alt={post?.user}
          className="post__avatar"
        />
      </div>
      <div className="post__user-meta-wrapper">
        <div>
          <span className="post__username">{post?.user}</span>
        </div>
        <div className="post__privacy">
          <span>{post?.timestamp}</span>
          <span>&middot;</span>
          <StyledTooltip
            title={TooltipInner(post.privacy)}
            PopperProps={popperProps}
          >
            <i className="post__privacy-icon" />
          </StyledTooltip>
        </div>
      </div>
      <div className="post__actions">
        <div className="post__actions-dots">
          <span>&middot;</span>
          <span>&middot;</span>
          <span>&middot;</span>
        </div>
      </div>
    </div>
    <div className="post__item-content">
      {post?.content &&
        post?.content.map((d, i) => (
          <div key={i}>
            <div className="post__status">
              {d?.type === "text" && (
                <span key={`text-${i}`} className="post__content-text">
                  {d.data}
                </span>
              )}
              {d?.type === "link" && (
                <span key={`link-${i}`} className="post__content-link">
                  <a href={d.data} target="_blank" rel="noreferrer">
                    {d.data}
                  </a>
                </span>
              )}
              {d?.type === "tag" &&
                d?.data?.map((a, j) => (
                  <span className="post__content-link" key={`text-${j}`}>
                    <a href={a.link} target="_blank" rel="noreferrer">
                      #{a.placeholder}
                    </a>
                    &nbsp;
                  </span>
                ))}
            </div>
            {d?.type === "image" &&
              d?.data?.map((b, k) => (
                <div className="post__images" key={`image-${k}`}>
                  <img src={b.src} alt={b.alt} />
                </div>
              ))}
          </div>
        ))}
    </div>
    <div className="post__interaction-data">
      <div className="post__data-icons">
        <div className="post__icon-like"></div>
        <div className="post__icon-love"></div>
        <div className="post__icon-haha"></div>
      </div>
      <div className="interaction-peoples"></div>
      <div className="post__interaction-cmt-share"></div>
    </div>
    <div className="post__interaction-button">
      <div className="post__like-button"></div>
      <div className="post__comment-button"></div>
      <div className="post__share-button"></div>
    </div>
    <div className="post__view-all-comments"></div>
    <div className="post__comments"></div>
    <div>{/* <PostEmoji /> */}</div>
  </div>
);

function Post() {
  return (
    <div className="feed__post">
      <div className="feed__post-items">
        {POSTS.map((item, i) => (
          <PostItem post={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export { Post };
