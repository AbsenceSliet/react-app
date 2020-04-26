import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingAnimation from "@/components/LoadingAnimation/index";
import { connect } from "react-redux";

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
      <HashRouter>
        <Switch>
          <Route exact path="/" component={asyncLoadComponent("Home")} />
        </Switch>
      </HashRouter>
    </>
  );
}
let mergeStateToProps = (state) => {
  return {};
};
export default connect(mergeStateToProps, {})(App);
