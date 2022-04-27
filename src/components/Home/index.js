import {Component} from 'react'
import './index.css'
import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {isLoggedIn: false}

  changeUserStatus = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="bg-card">
          <Message userStatus={isLoggedIn} />
          {isLoggedIn ? (
            <Logout changeUserStatus={this.changeUserStatus} />
          ) : (
            <Login changeUserStatus={this.changeUserStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
