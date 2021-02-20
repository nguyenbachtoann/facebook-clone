import "./App.css";
import { useEffect } from "react";
import { Header } from "./components/header";
import { MENU_INFO } from "./components/header";
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
    <div className="App">
      <Header />

      {/** Header */}
      {/** App Body */}
      {/**    Side Bar */}
      {/**    Feed */}
      {/**    Widget*/}
    </div>
  );
}

export default App;
