import React from "react";
import { I_LOGO_PATH_1, I_LOGO_PATH_2 } from "@toannb/assets/svg-path";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

function LogoIcon() {
  return (
    <svg
      className="header-left__logo"
      style={defaultStyles}
      width="40px"
      heigh="40px"
      viewBox="0 0 36 36"
      title="Logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="url(#jsc_s_5)"
    >
      <defs>
        <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_5">
          <stop offset="0%" stopColor="#0062E0"></stop>
          <stop offset="100%" stopColor="#19AFFF"></stop>
        </linearGradient>
      </defs>
      <path d={I_LOGO_PATH_1} />
      <path d={I_LOGO_PATH_2} fill="white" />
    </svg>
  );
}

export { LogoIcon };
