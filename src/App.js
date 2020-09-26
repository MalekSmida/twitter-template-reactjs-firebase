import React from "react";
import "./App.scss";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Widgets from "./component/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
