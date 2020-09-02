import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NotFound from "./components/NotFound";
import Header from "./components/Header";

const PhoTo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={PhoTo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
