import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { firebaseAuth, facebookProvider } from "../../configs";
import { loginLoading, loginSuccess, loginFailed } from "./actions";
import axios from "axios";

export const useLogin = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const makeRequest = () => {
    dispatch(loginLoading);
    firebaseAuth
      .signInWithPopup(facebookProvider)
      .then(async (r) => {
        const token = r.credential.accessToken;
        const photoUrl = `${r.user.photoURL}?width=960&height=960&access_token=${token}`;
        const avatarUrl = await fetchAvatarFBGraph(photoUrl);
        console.log("ava: ", avatarUrl);
        r = { ...r, avatar: avatarUrl };
        console.log("user", r);
        dispatch(loginSuccess(r));
        localStorage.setItem("user", JSON.stringify(r));
      })
      .catch((e) => dispatch(loginFailed(e)));
  };
  return [state, makeRequest];
};

const fetchAvatarFBGraph = async (photoUrl) => {
  const config = {
    responseType: "arraybuffer",
  };
  return await axios
    .get(photoUrl, config)
    .then((r) => {
      let image = btoa(
        new Uint8Array(r.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return `data:${r.headers["content-type"].toLowerCase()};base64,${image}`;
    })
    .catch(console.log);
};
