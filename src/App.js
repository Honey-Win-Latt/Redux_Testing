import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducer";

import Persons from "./containers/Persons";

const store = createStore(reducers);
// I am from main
// I AM IN Master branch
class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>
            Turn this app into one which does NOT use local state (in
            components) but instead uses Redux
          </li>
        </ol>
        <Provider store={store}>
          <Persons />
        </Provider>
      </div>
    );
  }
}

export default App;
