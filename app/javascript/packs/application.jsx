import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/layout/header'
import Main from './components/layout/main'
import Footer from './components/layout/footer'

const store = configureStore();
// Just for tests
window.store = store;
import axios from 'axios';
window.axios = axios;
window.react = React;
window.reactDOM = ReactDOM;

class Application extends React.Component {
  componentDidMount() {
    // need to load current_user if access_token present
  }

  render() {
    return <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    </Provider>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application/>,
    document.getElementById('root'),
  )
});
