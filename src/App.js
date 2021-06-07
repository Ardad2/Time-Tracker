import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers);



function App() {
  return (
    <Provider store={store}>
      <h1>Hello</h1>
    </Provider>
  );
}
export default App;
