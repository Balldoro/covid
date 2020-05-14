import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Redirect from="/" to="/global" />
      <GlobalStyle />
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
