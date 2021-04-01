import React from "react";
import { Avatar } from "@material-ui/core";
import {
  StyledTooltip,
  TooltipInner,
  popperProps,
  Divider,
} from "@toannb/common";
import { PostEmoji, POSTS, POST_ACTION_INFO } from "@toannb/components/feed";
import {
  likePng256,
  lovePng256,
  hahaPng256,
} from "@toannb/assets/reactions-emoticons/png-256";

const postIconStyle = (item) => {
  return {
    backgroundImage: `url(${item.icon})`,
    backgroundPosition: item.iconPosition,
    backgroundSize: "73px 361px",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    width: item.size,
    height: item.size,
  };
};
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
                  <img src={b.src} alt={b.alt} loading="lazy" />
                </div>
              ))}
          </div>
        ))}
    </div>
    <div className="post__interaction-data">
      <div className="post__data-icons">
        <div className="post__icon-like post__icon">
          <img src={likePng256} alt="data post like icon" loading="lazy" />
        </div>
        <div className="post__icon-love post__icon">
          <img src={lovePng256} alt="data post love icon" loading="lazy" />
        </div>
        <div className="post__icon-haha post__icon">
          <img src={hahaPng256} alt="data post haha icon" loading="lazy" />
        </div>
        <span className="post__data-peoples">
          {post?.interactions?.peoples}
        </span>
      </div>
      <div className="post__data-comments-shares">
        <span className="post__data-comments">
          {post?.interactions?.comments}
        </span>
        <span className="post__data-shares">{post?.interactions?.shares}</span>
      </div>
    </div>
    <Divider className="post__divider" />
    <div className="post__interaction-buttons">
      <div className="post__buttons-container">
        {POST_ACTION_INFO &&
          POST_ACTION_INFO.map((item, i) => (
            <div
              className={`post__buttons-option post__buttons-option-${item?.wrapClassName}`}
              key={i}
            >
              <div className="icon-wrapper">
                <i
                  className={`post__buttons-option-${item?.iconClassName} post__buttons-icon`}
                  style={postIconStyle(item)}
                />
              </div>
              <span>{item?.text}</span>
              {item?.wrapClassName === "like" && <PostEmoji />}
            </div>
          ))}
      </div>
    </div>
    {/* <Divider className="post__divider" />
    <div className="post__view-all-comments"></div>
    <Divider className="post__divider" />
    <div className="post__comments"></div> */}
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
