import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextEditor from "./TextEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h11"> Add The Experience</h1>
      </header>
      <div className="editor">
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
