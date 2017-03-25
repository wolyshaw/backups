import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import List from 'components/list'
import Upload from 'components/upload'
import Setting from 'components/setting'
import { menu } from '../config/config'
import styles from 'static/index.css'
const history = createHashHistory()

const MenuItem = props => (
  <li className={styles.item}>
    <Link to={props.li.url}>
      {props.li.title}
    </Link>
  </li>
)

localStorage.setItem('test', 'value')

const Main = props => {
  return (
    <Router history={history}>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.title}>backups</h1>
            <ul className={styles.list}>
              {
                menu.map((li, i) => <MenuItem key={i} li={li}/>)
              }
            </ul>
          </header>
        <Route exact path="/" component={Upload}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/setting" component={Setting}/>
      </div>
    </Router>
  )
}

const App = props => {
  return (
    <div>
      Appa
    </div>
  )
}

render(
  <Main/>,
  document.getElementById('app')
)
