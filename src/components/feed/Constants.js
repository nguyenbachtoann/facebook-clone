import { importAllImgs } from "../../helpers";
const IMGS = importAllImgs();

const imgPreFix = "story";

export const FEED_STORIES_INFO = [
  {
    user: "Bơ",
    avatar: IMGS[`${imgPreFix}_roseavatar.jpg`].default,
    storyMedia: IMGS[`${imgPreFix}_rosemedia.jpg`].default,
  },
  {
    user: "Lía",
    avatar: IMGS[`${imgPreFix}_lisaavatar.jpg`].default,
    storyMedia: IMGS[`${imgPreFix}_lisamedia.jpg`].default,
  },
  {
    user: "Chi Chu",
    avatar: IMGS[`${imgPreFix}_jisooavatar.jpg`].default,
    storyMedia: IMGS[`${imgPreFix}_jisoomedia.jpg`].default,
  },
  {
    user: "Chén Nì",
    avatar: IMGS[`${imgPreFix}_jennieavatar.jpg`].default,
    storyMedia: IMGS[`${imgPreFix}_jenniemedia.jpg`].default,
  },
];
