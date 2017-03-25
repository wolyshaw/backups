import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import styles from 'static/setting.css'

const Qiniu = props => {
  let submit = e => {
    e.preventDefault()
  }
  return (
    <form className={styles.qiniu} onSubmit={submit}>
      <label>
        <span>AccessKey:</span>
        <input type="text"/>
      </label>
      <label>
        <span>SecretKey:</span>
        <input type="text"/>
      </label>
      <label>
        <span>bucket:</span>
        <input type="text"/>
      </label>
      <label>
        <span>prefix:</span>
        <input type="text"/>
      </label>
      <input type="submit" className={styles.submit} value="保存"/>
    </form>
  )
}

export default class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      server: '0'
    }
  }
  render() {
    return(
      <div className={styles.setting}>
        <label className={styles.choose}>
          <span>选择存储服务商：</span>
          <select defaultValue={this.state.server} onChange={e => this.setState({server: e.target.value})}>
            <option value="0">七牛</option>
            <option value="1">阿里云</option>
          </select>
        </label>
        {
          this.state.server === '0' ? <Qiniu/> : ''
        }
      </div>
    )
  }
}
