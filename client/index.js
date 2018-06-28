import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Calendar } from './components'

ReactDOM.render(
  <Router>
    <Calendar />
  </Router>,
  document.getElementById('app')
)