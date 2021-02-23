import "./App.scss";
import { useEffect } from "react";
import { Header, MENU_INFO, Side, Feed, Widget } from "./components";

function App() {
  const [HOME] = MENU_INFO;
  useEffect(() => {
    const getCurrentMenu = () => {
      return localStorage.getItem("currentMenu");
    };
    if (!getCurrentMenu()) {
      localStorage.setItem("currentMenu", HOME.path);
    }
  }, [HOME]);
  return (
    <div className="app">
      <Header />
      <div id="app__body">
        <Side />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
