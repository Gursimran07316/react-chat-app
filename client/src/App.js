import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Chat from "./Components/ChatPage/ChatPage";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
