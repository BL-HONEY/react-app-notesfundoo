import React from 'react';
import Card from '@material-ui/core/Card';
import '../css/registration.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
    // this.state = {value : ''}
  }

  handlechangeall = (event) => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (

      <Card className="card">
        <div className="content">
          <div className="title">
            <div className="f">F </div>
            <div className="u">u </div>
            <div className="n">n </div>
            <div className="d">d </div>
            <div className="o">o </div>
            <div className="oo">o </div>
            <div className="n">N </div>
            <div className="ooo">o </div>
            <div className="t">t </div>
            <div className="e">e </div>
            <div className="s">s </div>
          </div>
          <div className="subtitle">
            Create your Fundoo Account
          </div>
          <div className="initials">
            <div className="nameArea">
              <TextField
                id="outlined-basic"
                className="textField"
                label="First Name"
                name="firstName"
                margin="normal"
                value={this.state.firstName}
                onChange={this.handlechangeall}
                variant="outlined"
              />
            </div>
            <div className="nameArea">
              <TextField
                id="outlined-basic"
                className="textField"
                label="Last Name"
                name="lastName"
                margin="normal"
                value={this.state.lastName}
                onChange={this.handlechangeall}
                variant="outlined"
              />
            </div>
          </div>
          <div className="emailArea">
            <TextField
              id="outlined-basic"
              className="textField3"
              label="Email"
              name="email"
              margin="normal"
              value={this.state.firstName}
              onChange={this.handlechangeall}
              variant="outlined"
            />
          </div>
          <div className="initials">
            <div className="nameArea">
              <TextField
                id="outlined-basic"
                className="textField"
                label="Password"
                name="password"
                margin="normal"
                value={this.state.firstName}
                onChange={this.handlechangeall}
                variant="outlined"
              />
            </div>
            <div className="nameArea">
              <TextField
                id="outlined-basic"
                className="textField"
                label="Confirm Password"
                name="password"
                margin="normal"
                value={this.state.lastName}
                onChange={this.handlechangeall}
                variant="outlined"
              />
            </div>
          </div>

          <div className="submit">
            <div>
              Log in instead?
        </div>
            <Button className="submitBtn" variant="contained">
              Sign In
      </Button>
          </div>
        </div>
        <div className="account">
          <img src={require("../assets/account.svg")} alt="error"></img>
          <div></div>
        </div>
      </Card>
    )
  }
}

export default Registration;