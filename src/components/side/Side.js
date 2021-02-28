import React from "react";
import "./style.scss";
import {
  SIDE_FOOTER_LINKS,
  SIDE_NAVIGATE_INFO,
  SIDE_SHORTCUT_INFO,
  TEXTS,
} from "./Constants";
import { SideOption } from "./SideOption";

const OptionMore = () => (
  <div className="side__navigate-option side__option side__option-more">
    <div className="side__navigate-option-wrapper side__option-wrapper">
      <div className="navigate-icon-wrapper side__icon-wrapper">
        <i className="navigate-icon side__icon" />
      </div>
      <div className="side__option-text-wrapper navigate-text-wrapper">
        <span>{TEXTS.showMore}</span>
      </div>
    </div>
  </div>
);

const Divider = () => <div className="side__divider divider" />;

function Side() {
  return (
    <div className="side">
      <div className="side__navigate">
        {SIDE_NAVIGATE_INFO &&
          SIDE_NAVIGATE_INFO.map((item, i) => (
            <SideOption item={item} key={i} />
          ))}
        <OptionMore />
      </div>
      <Divider />
      <div className="side__shortcut">
        <div className="side__shortcut-header">
          <span className="shortcut-header__title">{TEXTS.shortcutTitle}</span>
          <div className="shortcut-header__actions">
            <span>{TEXTS.shortcutEdit}</span>
          </div>
        </div>
        {SIDE_SHORTCUT_INFO &&
          SIDE_SHORTCUT_INFO.map((item, i) => (
            <SideOption item={item} key={i} />
          ))}
        <OptionMore />
      </div>
      <div className="side__footer">
        <div className="side__footer-wrapper">
          {SIDE_FOOTER_LINKS &&
            SIDE_FOOTER_LINKS.map((item, i) => item.data(i, "side__footer"))}
        </div>
      </div>
    </div>
  );
}

export { Side };
