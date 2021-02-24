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
  return images;
}

export { importAllImgs };
