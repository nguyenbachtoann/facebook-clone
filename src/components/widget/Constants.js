import { importAllImgs } from "@toannb/helpers";
const IMGS = importAllImgs();

export const TEXTS = {
  yourPageTitle: "Your Pages",
  friendRequestTitle: "Friend Requests",
  friendRequestSeeAll: "See All",
  btnConfirm: "Confirm",
  btnDelete: "Delete",
  birthdayTitle: "Birthday",
  contactTitle: "Contact",
  contactMeeting: "New room",
  contactSearch: "Search by name or group",
  contactOptions: "Options",
};

export const WIDGET_YOUR_PAGE_INFO = [
  {
    title: "Beautiful Animals",
    icon: IMGS["widget_beautifulanimals.jpg"].default,
    iconClass: "your-page-icon",
    class: "your-page",
    path: "/pages/beautiful-animal",
    text: "Beautiful Animals",
    items: [
      {
        title: "Messenger",
        icon: IMGS["static-setting-5.png"].default,
        iconPosition: "0 -525px",
        iconSize: "21px 693px",
        size: 20,
        iconClass: "your-page-messenger-icon",
        class: "your-page-item-icon",
        path: "/pages/beautiful-animal/messenger",
        text: "1 Message",
        extraText: null,
      },
      {
        title: "Notification",
        icon: IMGS["static-setting-5.png"].default,
        iconPosition: "0 -126px",
        iconSize: "21px 693px",
        size: 20,
        iconClass: "your-page-notification-icon",
        class: "your-page-item-icon",
        path: "/pages/beautiful-animal/notification",
        text: "20+ Notifications",
        extraText: null,
      },
      {
        title: "Create Ads",
        icon: IMGS["static-setting-5.png"].default,
        iconPosition: "0 -504px",
        iconSize: "21px 693px",
        size: 20,
        iconClass: "your-page-create-ads-icon",
        class: "your-page-item-icon",
        path: "/pages/beautiful-animal/create-ads",
        text: "Create Promotion",
        extraText: null,
      },
    ],
    extraText: null,
  },
];

export const FRIEND_REQUESTS = [
  {
    user: "Travis Scott",
    avatar: IMGS["widget_travisscott.jpg"].default,
    iconClass: "friend-request-user-icon",
    time: "2h",
  },
];

export const FRIEND_BIRTHDAY = [
  {
    title: "Birthday",
    icon: IMGS["widget_birthday.png"].default,
    iconClass: "birthday-icon",
    class: "birthday",
    path: "/birthday",
    people: ["Alien"],
    text: "Today is birthday of",
    split: "and",
  },
];
