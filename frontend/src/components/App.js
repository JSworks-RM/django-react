import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"

import Header from "./layout/Header"
import Dashboard from "./leads/Dashboard"

// Handler and Alert
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { Provider } from 'react-redux'
import store from '../redux/store'

// Alert Options
const alertOption = {
  timeout: 3000,
  position: 'top center'
}

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <AlertProvider template={AlertTemplate} {...alertOption}>
          <Fragment>
            <Header />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
