import { importAllImgs } from "../../helpers";
const IMGS = importAllImgs();

const strPreFix = "story";
const fsPreFix = "friendstatus";

export const TEXTS = {
  storyGo: "See all stories",
  createStory: "Create a Story",
  statusPlaceHolder: "What's on your mind, ",
  friendStatusCreateMeeting: "Create Room",
  friendStatusSendGreeting: "Say Hi",
};

export const FEED_STORIES_INFO = [
  {
    user: "Rosé",
    avatar: IMGS[`${strPreFix}_roseavatar.jpg`].default,
    storyMedia: IMGS[`${strPreFix}_rosemedia.jpg`].default,
  },
  {
    user: "Lisa",
    avatar: IMGS[`${strPreFix}_lisaavatar.jpg`].default,
    storyMedia: IMGS[`${strPreFix}_lisamedia.jpg`].default,
  },
  {
    user: "Jisoo",
    avatar: IMGS[`${strPreFix}_jisooavatar.jpg`].default,
    storyMedia: IMGS[`${strPreFix}_jisoomedia.jpg`].default,
  },
  {
    user: "Jennie",
    avatar: IMGS[`${strPreFix}_jennieavatar.jpg`].default,
    storyMedia: IMGS[`${strPreFix}_jenniemedia.jpg`].default,
  },
];

export const POST_ACTION_INFO = [
  {
    size: 24,
    icon: IMGS[`static-setting-3.png`].default,
    iconPosition: "0 -357px",
    wrapClassName: "media",
    iconClassName: "media-icon",
    text: "Photo/Video",
  },
  {
    size: 24,
    icon: IMGS[`static-setting-3.png`].default,
    iconPosition: "0 -307px",
    wrapClassName: "tagging",
    iconClassName: "tagging-icon",
    text: "Tag Friends",
  },
  {
    size: 24,
    icon: IMGS[`static-setting-3.png`].default,
    iconPosition: "0 -282px",
    wrapClassName: "emotion-activity",
    iconClassName: "emotion-activity-icon",
    text: "Feeling/Activity",
  },
];

export const ONLINE_FRIENDS = [
  {
    text: "Clairo",
    icon: IMGS[`${fsPreFix}_clairo.jpg`].default,
  },
  {
    text: "Dean",
    icon: IMGS[`${fsPreFix}_dean.jpg`].default,
  },
  {
    text: "Jisoo",
    icon: IMGS[`${strPreFix}_jisooavatar.jpg`].default,
  },
  {
    text: "Jennies",
    icon: IMGS[`${strPreFix}_jennieavatar.jpg`].default,
  },
  {
    text: "Rosé",
    icon: IMGS[`${strPreFix}_roseavatar.jpg`].default,
  },
  {
    text: "Lisa",
    icon: IMGS[`${strPreFix}_lisaavatar.jpg`].default,
  },
  {
    text: "ASAP Rocky",
    icon: IMGS[`${fsPreFix}_asaprocky.jpg`].default,
  },
  {
    text: "Billie Eilish",
    icon: IMGS[`${fsPreFix}_billieeilish.jpg`].default,
  },
  {
    text: "Cuco",
    icon: IMGS[`${fsPreFix}_cuco.jpg`].default,
  },
  {
    text: "DPR Live",
    icon: IMGS[`${fsPreFix}_dprlive.jpg`].default,
  },
  {
    text: "DPR Ian",
    icon: IMGS[`${fsPreFix}_dprian.jpg`].default,
  },
  {
    text: "Frank Ocean",
    icon: IMGS[`${fsPreFix}_frankocean.png`].default,
  },
  {
    text: "G-Dragon",
    icon: IMGS[`${fsPreFix}_gd.jpg`].default,
  },
  {
    text: "Joji",
    icon: IMGS[`${fsPreFix}_joji.jpg`].default,
  },
  {
    text: "Kid Milli",
    icon: IMGS[`${fsPreFix}_kidmilli.jpg`].default,
  },
  {
    text: "Killua",
    icon: IMGS[`${fsPreFix}_killua.jpg`].default,
  },
  {
    text: "Rich Brian",
    icon: IMGS[`${fsPreFix}_richbrian.jpg`].default,
  },
  {
    text: "Somi",
    icon: IMGS[`${fsPreFix}_somi.jpg`].default,
  },
  {
    text: "The Weeknd",
    icon: IMGS[`${fsPreFix}_theweeknd.jpg`].default,
  },
  {
    text: "Thomas Shelby",
    icon: IMGS[`${fsPreFix}_shelby.jpg`].default,
  },
  {
    text: "Baifern",
    icon: IMGS[`${fsPreFix}_baifern.jpg`].default,
  },
  {
    text: "Davika",
    icon: IMGS[`${fsPreFix}_davika.jpg`].default,
  },
  {
    text: "Mario",
    icon: IMGS[`${fsPreFix}_mario.jpg`].default,
  },
  {
    text: "Oh Hyuk",
    icon: IMGS[`${fsPreFix}_ohhyuk.jpg`].default,
  },
  {
    text: "Pimtha",
    icon: IMGS[`${fsPreFix}_pimtha.jpg`].default,
  },
];

export const POSTS = [
  {
    id: 1,
    user: "Rosé",
    profile: ONLINE_FRIENDS.find((p) => p.text === "Rosé"),
    timestamp: "6m",
    privacy: "Public",
    text: 'Check this out: "ON THE GROUND" M/V. 🧚💝',
    hyper: "https://youtu.be/CKZvWhCqx1s",
  },
  {
    id: 2,
    user: "Clairo",
    profile: ONLINE_FRIENDS.find((p) => p.text === "Clairo"),
    timestamp: "7m",
    privacy: "Public",
    text: 'Old one: "Pretty Girl". 🌼',
    hyper: "https://youtu.be/mngtcfcaVrI",
  },
];
