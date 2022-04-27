import './index.css'

const Login = props => {
  const {changeUserStatus} = props

  return (
    <button type="button" onClick={changeUserStatus} className="login-button">
      Login
    </button>
  )
}

export default Login
