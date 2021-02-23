import { importAllImgs } from "../../helpers";

const IMGS = importAllImgs();
export const SIDE_NAVIGATE_INFO = [
  {
    title: "User",
    icon: IMGS["avatar.jpg"].default,
    iconClass: "user-icon",
    class: "user",
    path: "/toan.nguyenbach",
    text: "Nguyễn Bách Toàn",
    extraText: null,
  },
  {
    title: "Covid",
    icon: IMGS["covid.png"].default,
    iconClass: "covid-icon",
    class: "covid",
    path: "/coronavirus_info",
    text: "(COVID-19) Trung tâm thông tin",
    extraText: null,
  },
  {
    title: "Friends",
    icon: IMGS["friends.png"].default,
    iconClass: "friends-icon",
    class: "friends",
    path: "/friends",
    text: "Bạn bè",
    extraText: null,
  },
  {
    title: "Saved",
    icon: IMGS["saved.png"].default,
    iconClass: "saved-icon",
    class: "saved",
    path: "/saved",
    text: "Đã lưu",
    extraText: null,
  },
  {
    title: "Groups",
    icon: IMGS["groups.png"].default,
    iconClass: "groups-icon",
    class: "groups",
    path: "/groups",
    text: "Nhóm",
    extraText: "9+ nhóm mới",
  },
];

export const SIDE_SHORTCUT_INFO = [
  {
    id: "shortcut_1",
    title: "Động Thỏ",
    icon: IMGS["shortcut_dongtho.jpg"].default,
    iconClass: "shortcut__dong-tho-icon",
    class: "dong-tho",
    path: "/groups/dongtho",
    text: "Động Thỏ",
    extraText: null,
  },
  {
    id: "shortcut_2",
    title: "Mò Và Thẻo",
    icon: IMGS["shortcut_movatheo.jpg"].default,
    iconClass: "shortcut__mo-va-theo-icon",
    class: "mo-va-theo",
    path: "/groups/mo-va-theo",
    text: "Mò Và Thẻo",
    extraText: null,
  },
  {
    id: "shortcut_3",
    title: "Không Phí Tiền Mạng",
    icon: IMGS["shortcut_khongphitienmang.jpg"].default,
    iconClass: "shortcut__khong-phi-tieng-mang-icon",
    class: "khong-phi-tieng-mang",
    path: "/groups/khong-phi-tien-mang",
    text: "Không Phí Tiền Mạng",
    extraText: null,
  },
  {
    id: "shortcut_4",
    title: "Vietnam Vintage Community",
    icon: IMGS["shortcut_vietnamvintagecommunity.jpg"].default,
    iconClass: "shortcut__vietnam-vintage-community-icon",
    class: "vietnamvintagecommunity",
    path: "/groups/vietnam-vintage-community",
    text: "Vietnam Vintage Community",
    extraText: null,
  },
  {
    id: "shortcut_5",
    title: "Lăn Vào Bếp",
    icon: IMGS["shortcut_lanvaobep.jpg"].default,
    iconClass: "shortcut__lan-vao-bep-icon",
    class: "lan-vao-bep",
    path: "/groups/lan-vao-bep",
    text: "Không Phí Tiền Mạng",
    extraText: null,
  },
  {
    id: "shortcut_6",
    title: "BlackPink - Vietnam FC",
    icon: IMGS["shortcut_bpvietnamfc.jpg"].default,
    iconClass: "shortcut__bp-vietnam-fc-icon",
    class: "bp-vietnam-fc-icon",
    path: "/groups/bp-vietnam-fc-icon",
    text: "BlackPink - Vietnam FC",
    extraText: null,
  },
  {
    id: "shortcut_7",
    title: "Artemocion",
    icon: IMGS["shortcut_artemocion.jpg"].default,
    iconClass: "shortcut__artemocion",
    class: "artemocion",
    path: "/groups/artemocion",
    text: "Artemocion",
    extraText: null,
  },
];

export const SIDE_FOOTER_LINKS = [
  {
    data: (key, className) => {
      return (
        <span key={key}>
          <a href="#">
            <span className={`${className}-text`}>Quyền riêng tư</span>
          </a>
        </span>
      );
    },
  },
  {
    data: (key, className) => {
      return (
        <span key={key}>
          <span className={`${className}-dot`}>&middot;</span>
          <a href="#">
            <span className={`${className}-text`}>Điều khoản</span>
          </a>
        </span>
      );
    },
  },
  {
    data: (key, className) => {
      return (
        <span key={key}>
          <span className={`${className}-dot`}>&middot;</span>
          <a href="#">
            <span className={`${className}-text`}>Quảng cáo</span>
          </a>
        </span>
      );
    },
  },
  {
    data: (key, className) => {
      return (
        <span key={key}>
          <span className={`${className}-dot`}>&middot;</span>
          <a href="#">
            <span className={`${className}-text`}>Lựa chọn quảng cáo</span>
            <span className={`${className}-text`}>
              <i className="side__footer-text-ads-choices-warning" />
            </span>
          </a>
        </span>
      );
    },
  },
  {
    data: (key, className) => {
      return (
        <span key={key}>
          <span className={`${className}-dot`}>&middot;</span>
          <a href="#">
            <span className={`${className}-text`}>Cookies</span>
          </a>
        </span>
      );
    },
  },
  {
    data: (key, className) => {
      return (
        <span key={key}>
          <span className={`${className}-dot`}>&middot;</span>
          <a href="#">
            <span className={`${className}-text-more`}>Xem thêm</span>
          </a>
        </span>
      );
    },
  },
  {
    data: (key, className) => {
      return (
        <span key={key}>
          <span className={`${className}-dot`}>&middot;</span>
          <span className={`${className}-text-copyright`}>
            Facebook &copy; 2021
          </span>
        </span>
      );
    },
  },
];
