import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Main = props => {
  return (
    <div>main</div>
  )
}

const App = props => {
  return (
    <div>main</div>
  )
}

render(
  <Router>
    <div>
      <Route exact={true} path="/" component={Main}/>
      <Route path="/app" component={App}/>
    </div>
  </Router>,
  document.getElementById('app')
)
