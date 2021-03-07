import { importAllImgs } from "../../helpers";
const IMGS = importAllImgs();

export const TEXTS = {
  yourPageTitle: "Trang của bạn",
  friendRequestTitle: "Lời mời kết bạn",
  friendRequestSeeAll: "Xem tất cả",
  btnConfirm: "Xác nhận",
  btnDelete: "Xoá",
  birthdayTitle: "Sinh nhật",
  contactTitle: "Người liên hệ",
  contactMeeting: "Phòng họp mặt mới",
  contactSearch: "Tìm kiếm theo tên hoặc nhóm",
  contactOptions: "Tuỳ chọn",
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
        text: "1 Tin nhắn",
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
        text: "20+ Thông báo",
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
        text: "Tạo quảng cáo",
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
    time: "2 giờ",
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
    text: "Hôm nay là sinh nhật của",
    split: "và",
  },
];
