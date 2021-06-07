import { createStore } from 'redux';
import { provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers);


import logo from './logo.svg';
import './App.css';


class App extends Component{

  render ()
  {
  return (
    <Provider store={store}>
      <h1>Test</h1>
    </Provider>
  );
}
}

export default App;
