import React, { useContext, useEffect } from "react";
import { AuthContext } from "@toannb/context";
import { FACEBOOK_LOGO_TEXT } from "@toannb/assets/svg-path";
import { firebaseAuth, facebookProvider } from "@toannb/configs";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./style.scss";
import "./styleResponsive.scss";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const displayNone = {
  opacity: 0,
  visibility: "hidden",
  transition: "all 0.2s ease-out",
};
const displayFlex = {
  opacity: 1,
  visibility: "visible",
  transition: "all 0.2s ease-in",
};

function Login() {
  const classes = useStylesFacebook();
  const authContext = useContext(AuthContext);
  const { loginSuccess, userInfo } = authContext;
  const login = () => {
    firebaseAuth.signInWithRedirect(facebookProvider);
  };

  useEffect(() => {
    loginSuccess();
  }, []);
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src={FACEBOOK_LOGO_TEXT} alt="facebook logo" loading="lazy" />
        </div>
        <div className="login__description">
          <span>Feel free to login</span>
        </div>
        <div className="login__button">
          <button className="login__facebook-button" onClick={login}>
            Login
          </button>
        </div>

        <div
          className={`${classes.root} login__loading`}
          style={
            userInfo?.status === "LOGIN_LOADING" ? displayFlex : displayNone
          }
        >
          <CircularProgress
            variant="determinate"
            className={classes.bottom}
            size={40}
            thickness={4}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.top}
            classes={{
              circle: classes.circle,
            }}
            size={40}
            thickness={4}
          />
        </div>

        <div className="login__description auth-description">
          <span>Authentication was powered by</span>
          <span>&nbsp;</span>
          <span>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Firebase
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export { Login };
