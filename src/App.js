import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Resume from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Home} />
      {/* <Route path="/AboutMe" component={AboutMe} /> */}
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
