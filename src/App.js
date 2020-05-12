import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Redirect from="/" to="/global" />
      <Sidebar />
    </Router>
  );
}

export default App;
