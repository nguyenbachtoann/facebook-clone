import { importAllImgs } from "../../helpers";
const IMGS = importAllImgs();

const strPreFix = "story";
const fsPreFix = "friendstatus";

export const TEXTS = {
  storyGo: "Xem tất cả các tin",
  createStory: "Tạo tin",
  statusPlaceHolder: "Nguyễn ơi, bạn đang nghĩ gì thế?",
  friendStatusCreateMeeting: "Tạo phòng họp mặt",
};

export const FEED_STORIES_INFO = [
  {
    user: "Bơ",
    avatar: IMGS[`${strPreFix}_roseavatar.jpg`].default,
    storyMedia: IMGS[`${strPreFix}_rosemedia.jpg`].default,
  },
  {
    user: "Lía",
    avatar: IMGS[`${strPreFix}_lisaavatar.jpg`].default,
    storyMedia: IMGS[`${strPreFix}_lisamedia.jpg`].default,
  },
  {
    user: "Chi Chu",
    avatar: IMGS[`${strPreFix}_jisooavatar.jpg`].default,
    storyMedia: IMGS[`${strPreFix}_jisoomedia.jpg`].default,
  },
  {
    user: "Chén Nì",
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
    text: "Ảnh/Video",
  },
  {
    size: 24,
    icon: IMGS[`static-setting-3.png`].default,
    iconPosition: "0 -307px",
    wrapClassName: "tagging",
    iconClassName: "tagging-icon",
    text: "Gắn thẻ bạn bè",
  },
  {
    size: 24,
    icon: IMGS[`static-setting-3.png`].default,
    iconPosition: "0 -282px",
    wrapClassName: "emotion-activity",
    iconClassName: "emotion-activity-icon",
    text: "Cảm xúc/Hoạt động",
  },
];

export const ONLINE_FRIENDS = [
  {
    user: "Clairo",
    avatar: IMGS[`${fsPreFix}_clairo.jpg`].default,
  },
  {
    user: "Dean",
    avatar: IMGS[`${fsPreFix}_dean.jpg`].default,
  },
  {
    user: "Chi Chu",
    avatar: IMGS[`${strPreFix}_jisooavatar.jpg`].default,
  },
  {
    user: "Chén Nì",
    avatar: IMGS[`${strPreFix}_jennieavatar.jpg`].default,
  },
  {
    user: "Bơ",
    avatar: IMGS[`${strPreFix}_roseavatar.jpg`].default,
  },
  {
    user: "Lía",
    avatar: IMGS[`${strPreFix}_lisaavatar.jpg`].default,
  },
  {
    user: "ASAP Rocky",
    avatar: IMGS[`${fsPreFix}_asaprocky.jpg`].default,
  },
  {
    user: "Billie Eilish",
    avatar: IMGS[`${fsPreFix}_billieeilish.jpg`].default,
  },
  {
    user: "Cuco",
    avatar: IMGS[`${fsPreFix}_cuco.jpg`].default,
  },
  {
    user: "DPR Live",
    avatar: IMGS[`${fsPreFix}_dprlive.jpg`].default,
  },
  {
    user: "DPR Ian",
    avatar: IMGS[`${fsPreFix}_dprian.jpg`].default,
  },
  {
    user: "Frank Ocean",
    avatar: IMGS[`${fsPreFix}_frankocean.png`].default,
  },
  {
    user: "G-Dragon",
    avatar: IMGS[`${fsPreFix}_gd.jpg`].default,
  },
  {
    user: "Joji",
    avatar: IMGS[`${fsPreFix}_joji.jpg`].default,
  },
  {
    user: "Kid Milli",
    avatar: IMGS[`${fsPreFix}_kidmilli.jpg`].default,
  },
  {
    user: "Killua",
    avatar: IMGS[`${fsPreFix}_killua.jpg`].default,
  },
  {
    user: "Rich Brian",
    avatar: IMGS[`${fsPreFix}_richbrian.jpg`].default,
  },
  {
    user: "Somi",
    avatar: IMGS[`${fsPreFix}_somi.jpg`].default,
  },
  {
    user: "The Weeknd",
    avatar: IMGS[`${fsPreFix}_theweeknd.jpg`].default,
  },
  {
    user: "Thomas Shelby",
    avatar: IMGS[`${fsPreFix}_shelby.jpg`].default,
  },
];
