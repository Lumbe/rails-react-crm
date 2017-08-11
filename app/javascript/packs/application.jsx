import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist'
import localforage from 'localforage'
import configureLocalForage from './store/configureLocalForage'
import {localForage} from 'localforage'
import configureStore from './store/configureStore'
// import {localForageDefaults} from './store/configureStore'
import Header from './components/layout/header'
import Main from './components/layout/main'
import Footer from './components/layout/footer'
import Routes from './routes'
import CheckAuthentication from './components/common/checkAuthentication'

configureLocalForage();
const store = configureStore();

persistStore(store, {storage: localForage});
// Just for tests
window.store = store;
import axios from 'axios';
window.axios = axios;
window.react = React;
window.reactDOM = ReactDOM;
window.localforage = localforage;

class Application extends React.Component {
  componentDidMount() {
    // need to load current_user if access_token present
  }

  render() {
    // const CheckedRoutes = CheckAuthentication(Routes)
    // console.log(<CheckedRoutes/>)
    return <Provider store={store}>
      {/* <BrowserRouter>
        <Switch>
          <CheckedRoutes/>
        </Switch>
      </BrowserRouter> */}
      <Routes/>
    </Provider>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application/>,
    document.getElementById('root'),
  )
});
