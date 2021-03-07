import React from "react";

function SideOption({ item }) {
  return (
    <a href="#">
      <div
        className={`side__option side__navigate-option side__option-${item.class}`}
        title={item.title}
      >
        <div className="side__option-wrapper side__navigate-option-wrapper">
          <div className="side__option-icon-wrapper navigate-icon-wrapper">
            <img
              className={`side__option-icon navigate-icon navigate-icon-${item.iconClass}`}
              src={item.icon}
              alt={item.title}
              loading="lazy"
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
    </a>
  );
}

export { SideOption };
