function importAllImgs() {
  const r = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);
  const rSide = require.context(
    "../assets/images/side",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const rFeedStory = require.context(
    "../assets/images/feed/story",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const rFriendStatus = require.context(
    "../assets/images/feed/friendstatus",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const rWidget = require.context(
    "../assets/images/widget",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const rPost = require.context(
    "../assets/images/feed/post",
    false,
    /\.(png|jpe?g|svg)$/
  );
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  rSide.keys().forEach((item) => {
    images[item.replace("./", "")] = rSide(item);
  });
  rFeedStory.keys().forEach((item) => {
    images[item.replace("./", "")] = rFeedStory(item);
  });
  rFriendStatus.keys().forEach((item) => {
    images[item.replace("./", "")] = rFriendStatus(item);
  });
  rWidget.keys().forEach((item) => {
    images[item.replace("./", "")] = rWidget(item);
  });
  rPost.keys().forEach((item) => {
    images[item.replace("./", "")] = rPost(item);
  });
  return images;
}

export { importAllImgs };
