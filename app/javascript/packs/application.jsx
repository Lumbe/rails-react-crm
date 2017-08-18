import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist'
import localForage from 'localforage'
import configureStore from './store/configureStore'
import Routes from './routes'

const store = configureStore();

// for tests
window.store = store;
import axios from 'axios';
window.axios = axios;
window.react = React;
window.reactDOM = ReactDOM;
// import leadApi from './api/leadApi'
// window.leadApi = leadApi
window.localForage = localForage;

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  persistStore(store,
    {storage: localForage},
    () => {
      ReactDOM.render(<Application/>, document.getElementById('root'))
    }
  );
});
