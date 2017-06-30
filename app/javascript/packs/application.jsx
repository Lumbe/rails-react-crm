import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/layout/header'
import Main from './components/layout/main'
import Footer from './components/layout/footer'

import axios from 'axios';
window.axios = axios;
window.react = React;
window.reactDOM = ReactDOM;

class Application extends React.Component {
  render() {
    return <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Application/>
    </BrowserRouter>,
    document.getElementById('root'),
  )
})
