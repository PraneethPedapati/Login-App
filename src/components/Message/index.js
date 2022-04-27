const Message = props => {
  const {userStatus} = props

  if (userStatus) {
    return <h1>Welcome User</h1>
  }
  return <h1>Please Login</h1>
}

export default Message
