import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Resume from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      {/* <Route path="/AboutMe" component={AboutMe} /> */}
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
