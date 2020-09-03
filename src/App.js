import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";


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
