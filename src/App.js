import React from "react";

import cn from "classnames";
import style from "./App.modules.scss";
import "./custom.css";

const App = () => {
  return (
    <div>
      <h1 className={cn(style.header, "color")}>This is App Component!</h1>
    </div>
  );
};

export default App;
