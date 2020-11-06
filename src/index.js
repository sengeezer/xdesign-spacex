import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import './styles/styles.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { startSetLaunches } from './actions/launches';

const store = configureStore();

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(
  <p>Loading...</p>,
  document.getElementById('root')
);

store.dispatch(startSetLaunches()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
