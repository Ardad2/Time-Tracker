import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { update } from './actions';
import throttle from 'lodash/throttle'

import reducers from './reducers';
import { loadState, saveState} from './utils'

import NewTimer from './components/NewTimer'
import ListTimers from './components/ListTimers'

const store = createStore(reducers);

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>Timer</h1>
      </div>
      <NewTimer />
      <ListTimers />
    </Provider>
  );
}

export default App;