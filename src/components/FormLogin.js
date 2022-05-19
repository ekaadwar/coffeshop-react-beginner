import React from 'react'

class FormLogin extends React.Component {
  state = {
    username: '',
    password: '',
    error: '',
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  submitData = (event) => {
    event.preventDefault()
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
    if (this.state.password.length < 6) {
      this.setState({ error: 'Password length must be greater than 6!' })
    } else {
      this.setState({ error: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.submitData}>
        <label>Username</label>
        <input
          onChange={(event) => this.setState({ username: event.target.value })}
          type="text"
        />
        <label>Password</label>
        <input onChange={this.onPasswordChange} type="password" />
        <div>{this.state.error && this.state.error}</div>
        <button>Submit</button>
      </form>
    )
  }
}

export default FormLogin
