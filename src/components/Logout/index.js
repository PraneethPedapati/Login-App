import './index.css'

const Logout = props => {
  const {changeUserStatus} = props

  return (
    <button type="button" onClick={changeUserStatus} className="logout-button">
      Logout
    </button>
  )
}

export default Logout
