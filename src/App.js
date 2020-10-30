import React from "react";

// local files
import "./App.scss";
import { Sidebar, Feed, Widgets } from "./component";

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
