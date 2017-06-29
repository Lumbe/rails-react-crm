import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {BrowserRouter} from 'react-router-dom'
import Header from './layout/header'
import Main from './layout/main'
import Footer from './layout/footer'

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
