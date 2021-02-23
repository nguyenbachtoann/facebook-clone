import React from "react";
import "./style.scss";
import {
  SIDE_FOOTER_LINKS,
  SIDE_NAVIGATE_INFO,
  SIDE_SHORTCUT_INFO,
} from "./Constants";

const TEXTS = {
  showMore: "Xem thêm",
  shortcutTitle: "Lối tắt của bạn",
  shortcutEdit: "Chỉnh sửa",
};

function Side() {
  return (
    <div className="side">
      <div className="side__navigate">
        {SIDE_NAVIGATE_INFO.map((item, i) => {
          return (
            <div
              className={`side__option side__navigate-option side__option-${item.class}`}
              title={item.title}
              key={i}
            >
              <div className="side__option-wrapper side__navigate-option-wrapper">
                <div className="side__option-icon-wrapper navigate-icon-wrapper">
                  <img
                    className={`side__option-icon navigate-icon navigate-icon-${item.iconClass}`}
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <div className="side__option-text-wrapper navigate-text-wrapper">
                  <span>{item.text}</span>
                  {item.extraText && (
                    <div className="side__option-text-info-wrapper">
                      <i className="text-info-dot" />
                      <span className="side__option-text-info navigate-text-info">
                        {item.extraText}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
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
      </div>
      <div className="side__divider divider" />
      <div className="side__shortcut">
        <div className="side__shortcut-header">
          <span className="shortcut-header__title">{TEXTS.shortcutTitle}</span>
          <div className="shortcut-header__actions">
            <span>{TEXTS.shortcutEdit}</span>
          </div>
        </div>
        {SIDE_SHORTCUT_INFO.map((item, i) => {
          return (
            <div
              className={`side__option side__navigate-option side__option-${item.class}`}
              title={item.title}
              key={i}
            >
              <div className="side__option-wrapper side__navigate-option-wrapper">
                <div className="side__option-icon-wrapper navigate-icon-wrapper">
                  <img
                    className={`side__option-icon navigate-icon navigate-icon-${item.iconClass}`}
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <div className="side__option-text-wrapper navigate-text-wrapper">
                  <span>{item.text}</span>
                  {item.extraText && (
                    <span className="side__option-text-info navigate-text-info">
                      {item.extraText}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
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
      </div>
      <div className="side__footer">
        <div className="side__footer-wrapper">
          {SIDE_FOOTER_LINKS.map((item, i) => item.data(i, "side__footer"))}
        </div>
      </div>
    </div>
  );
}

export { Side };
