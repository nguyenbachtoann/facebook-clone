import React from "react";
import "./style.scss";
import {
  WIDGET_YOUR_PAGE_INFO,
  FRIEND_REQUESTS,
  FRIEND_BIRTHDAY,
  TEXTS,
} from "./Constants";
import { ONLINE_FRIENDS } from "../feed/Constants";
import { Option, OptionFriendRequest, OptionBirthday } from "./Option";
import { StyledTooltip, TooltipInner, popperProps } from "../common";

const Divider = () => <div className="widget__divider divider" />;

function Widget() {
  return (
    <div className="widget">
      <div className="widget__your-page">
        <div className="widget__your-page-header">
          <span className="your-page-header__title">{TEXTS.yourPageTitle}</span>
          <div className="your-page-header__actions">
            <div className="your-page-header__actions-dots">
              <span>&middot;</span>
              <span>&middot;</span>
              <span>&middot;</span>
            </div>
          </div>
        </div>
        {WIDGET_YOUR_PAGE_INFO &&
          WIDGET_YOUR_PAGE_INFO.map((item, i) => (
            <div key={i}>
              <Option item={item} type="option" />

              {item.items &&
                item.items.map((s, j) => (
                  <Option item={s} type="option-item" key={j} />
                ))}
            </div>
          ))}
      </div>
      <Divider />
      <div className="widget__friend-request">
        <div className="widget__friend-request-header">
          <span className="friend-request-header__title">
            {TEXTS.friendRequestTitle}
          </span>
          <div className="friend-request-header__actions">
            <span>{TEXTS.friendRequestSeeAll}</span>
          </div>
        </div>
        {FRIEND_REQUESTS &&
          FRIEND_REQUESTS.map((item, i) => (
            <OptionFriendRequest item={item} key={i} />
          ))}
      </div>
      <Divider />
      <div className="widget__birthday">
        <div className="widget__birthday-header">
          <span className="birthday-header__title">{TEXTS.birthdayTitle}</span>
        </div>
        {FRIEND_BIRTHDAY &&
          FRIEND_BIRTHDAY.map((item, i) => (
            <OptionBirthday item={item} key={i} />
          ))}
      </div>
      <Divider />
      <div className="widget__contact">
        <div className="widget__contact-header">
          <span className="contact-header__title">{TEXTS.contactTitle}</span>
          <div className="contact-header__actions">
            <StyledTooltip
              title={TooltipInner(TEXTS.contactMeeting)}
              PopperProps={popperProps}
            >
              <div className="contact__action contact__actions-meeting">
                <i className="contact__actions-meeting-icon" />
              </div>
            </StyledTooltip>
            <StyledTooltip
              title={TooltipInner(TEXTS.contactSearch)}
              PopperProps={popperProps}
            >
              <div className="contact__action contact__actions-search">
                <i className="contact__actions-search-icon" />
              </div>
            </StyledTooltip>
            <StyledTooltip
              title={TooltipInner(TEXTS.contactOptions)}
              PopperProps={popperProps}
            >
              <div className="contact__action contact__actions-options">
                <i className="contact__actions-options-icon" />
              </div>
            </StyledTooltip>
          </div>
        </div>
        {ONLINE_FRIENDS &&
          ONLINE_FRIENDS.map((item, i) => (
            <Option item={item} key={i} type="option" value="online" />
          ))}
      </div>
    </div>
  );
}

export { Widget };
