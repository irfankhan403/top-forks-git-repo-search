import React from "react";
import {Provider} from 'react-redux';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import store from './store';

import { components as homeComponents } from "./app/home";

const { Home } = homeComponents;

function App() {
  return (
    <Provider store={store}>
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
    </Provider>
  );
}

export default App;
