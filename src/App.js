import "./App.scss";
import { useEffect, useContext } from "react";
import { Header, MENU_INFO, Side, Feed, Widget, Login } from "./components";
import { AuthContext } from "./context";

function App() {
  const authContext = useContext(AuthContext);
  const { isLogged, checkAuth } = authContext;
  const [HOME] = MENU_INFO;

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
      {isLogged ? (
        <>
          <Header />
          <div id="app__body">
            <Side />
            <Feed />
            <Widget />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
