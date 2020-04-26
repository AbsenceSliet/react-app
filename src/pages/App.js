import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingAnimation from "@/components/LoadingAnimation/index";
import { connect } from "react-redux";
import Header from "@/components/Header";

import "./App.scss";
const asyncLoadComponent = (component) =>
  Loadable({
    loader: () => import(`@/pages/${component}/index`),
    loading: LoadingAnimation,
    delay: 300,
  });

function App(props) {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={asyncLoadComponent("Home")} />
          <Route
            exact
            path="/search"
            component={asyncLoadComponent("Search")}
          />
        </Switch>
      </Router>
    </>
  );
}
let mergeStateToProps = () => {
  return {};
};
export default connect(mergeStateToProps, {})(App);
