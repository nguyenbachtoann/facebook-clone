import { importAllImgs } from "../../helpers";
const IMGS = importAllImgs();

const strPreFix = "story";
const fsPreFix = "friendstatus";

export const TEXTS = {
  storyGo: "Xem tất cả các tin",
  createStory: "Tạo tin",
  statusPlaceHolder: "Nguyễn ơi, bạn đang nghĩ gì thế?",
  friendStatusCreateMeeting: "Tạo phòng họp mặt",
  friendStatusSendGreeting: "Gửi lời chào",
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
    text: "Clairo",
    icon: IMGS[`${fsPreFix}_clairo.jpg`].default,
  },
  {
    text: "Dean",
    icon: IMGS[`${fsPreFix}_dean.jpg`].default,
  },
  {
    text: "Chi Chu",
    icon: IMGS[`${strPreFix}_jisooavatar.jpg`].default,
  },
  {
    text: "Chén Nì",
    icon: IMGS[`${strPreFix}_jennieavatar.jpg`].default,
  },
  {
    text: "Bơ",
    icon: IMGS[`${strPreFix}_roseavatar.jpg`].default,
  },
  {
    text: "Lía",
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
