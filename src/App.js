import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { update } from "./actions";
import throttle from "lodash/throttle";

import reducers from "./reducers";
import { loadState, saveState } from "./utils";

import Headbar from "./components/Headbar";
import NavBar from "./components/navbar";
import NewTimer from "./components/NewTimer";
import ListTimers from "./components/ListTimers";

//import Header from './components/Header/Header'

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

let lastUpdateTime = Date.now();
setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 50);

let todayDate = new Date();

function App() {
  return (
    <Provider store={store}>
      <Headbar />
      <div className="App">
        <NavBar />
        <div className="Main">
          <NewTimer />
          <ListTimers />
        </div>
      </div>
    </Provider>
  );
}

export default App;
