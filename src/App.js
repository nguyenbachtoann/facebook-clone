import "./App.scss";
import { useEffect, useContext } from "react";
import {
  Header,
  MENU_INFO,
  Side,
  Feed,
  Widget,
  Login,
} from "@toannb/components";
import { AuthContext } from "@toannb/context";

function App() {
  const authContext = useContext(AuthContext);
  const { isLogged, checkAuth } = authContext;
  const [HOME] = MENU_INFO;

  const getLocalUser = () => {
    return localStorage.getItem("user");
  };
  useEffect(() => {
    checkAuth();
    const getCurrentMenu = () => {
      return localStorage.getItem("currentMenu");
    };
    if (!getCurrentMenu()) {
      localStorage.setItem("currentMenu", HOME.path);
    }
  }, [HOME, checkAuth]);
  return (
    <div className="app">
      <main>
        {isLogged ? (
          <>
            <Header />
            <div id="app__body">
              <Side />
              <Feed />
              <Widget />
            </div>
          </>
        ) : getLocalUser() ? null : (
          <Login />
        )}
      </main>
    </div>
  );
}

export default App;
