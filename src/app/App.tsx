import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import AppRouter from "./router";
import NavBar from "widgets/NavBar";
import SideBar from "widgets/SideBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="container-page">
        <SideBar />
          <AppRouter />
      </div>
    </div>
  );
};

export default App;
