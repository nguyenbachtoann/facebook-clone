const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function (config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    // __assets [general]
    "@toannb/assets/svg-path": resolve("src/assets/images/svg"),
    // __assets [reaction]
    "@toannb/assets/reactions-emoticons/png-16": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-16"
    ),
    "@toannb/assets/reactions-emoticons/png-24": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-24"
    ),
    "@toannb/assets/reactions-emoticons/png-32": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-32"
    ),
    "@toannb/assets/reactions-emoticons/png-48": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-48"
    ),
    "@toannb/assets/reactions-emoticons/png-64": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-64"
    ),
    "@toannb/assets/reactions-emoticons/png-96": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-96"
    ),
    "@toannb/assets/reactions-emoticons/png-128": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-128"
    ),
    "@toannb/assets/reactions-emoticons/png-192": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-192"
    ),
    "@toannb/assets/reactions-emoticons/png-256": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-256"
    ),
    "@toannb/assets/reactions-emoticons/png-512": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-512"
    ),
    "@toannb/assets/reactions-emoticons/png-1024": resolve(
      "src/assets/images/facebook-reactions-emoticons/png-1024"
    ),
    "@toannb/common": resolve("src/components/common"),
    "@toannb/components": resolve("src/components"),
    "@toannb/components/feed": resolve("src/components/feed"),
    "@toannb/components/header": resolve("src/components/header"),
    "@toannb/components/login": resolve("src/components/login"),
    "@toannb/components/side": resolve("src/components/side"),
    "@toannb/components/widget": resolve("src/components/widget"),
    "@toannb/context": resolve("src/context"),
    "@toannb/helpers": resolve("src/helpers"),
    "@toannb/configs": resolve("src/configs"),
    // __styles
    "@toannb/styles/js": resolve("src/styles/style"),

    // etc...
  });

  return config;
};
