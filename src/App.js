import React from "react";
import { GlobalStyle, Wrapper } from "./GlobalStyles";
import { Redirect, HashRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <HashRouter>
      <Redirect from="/" to="/global" />
      <GlobalStyle />
      <Sidebar />
      <Wrapper>
        <Header />
        <Dashboard />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
