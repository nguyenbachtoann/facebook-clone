import React from "react";
import { Avatar } from "@material-ui/core";
import { POSTS } from "./Constants";

const PostItem = ({ post }) => (
  <div
    className="status__action-wrapper"
    // style={{ width: "100%", height: 400, background: "white" }}
  >
    <div className="status__avatar-wrapper">
      <Avatar
        src={post?.profile && post.profile.icon}
        sizes="40"
        alt="Avatar"
        className="status__avatar"
      />
    </div>
    <label className="status__label"></label>
  </div>
);

function Post() {
  return (
    <div className="feed__post">
      <div className="feed__post">
        {POSTS.map((item, i) => (
          <PostItem post={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export { Post };
