import React from 'react';
import Card from '@material-ui/core/Card';
import '../css/registration.scss';
import '../css/login.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login } from '../services/userService'
import 'react-toastify/dist/ReactToastify.min.css'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            showLoader: false
        }

        this.state = { snackbaropen: false, snackbarmsg: '' };
    }

    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLoginSubmit = (event) => {
        this.setState({ showLoader: true })
        var loginData = {};
        loginData.email = this.state.email;
        loginData.password = this.state.password;


        console.log("data : 37", loginData);
        let options = {
            data: loginData,
            purpose: 'login'
        }
        login(options)
            .then((response) => {
                console.log("response in login jsx: ", response);
                this.setState({ snackbaropen: true, snackbarmsg: "Login successful" });
                this.setState({ showLoader: false });

            })
            .catch((error) => {
                console.log("error in regster jsx: ", error);
                this.setState({ snackbaropen: true, snackbarmsg: error.message });
                this.setState({ showLoader: false });
            })
    }

    handleRegisterSubmit = () => {
        let path = '/register'
        this.props.history.push(path);
    }

    handleForgotPassSubmit = () => {
        let path = '/forgotPassword'
        this.props.history.push(path);
    }
    render() {
        return (
            <Card className="loginCard">

                <div className="progress">
                    {this.state.showLoader ? <LinearProgress /> : null
                    }

                </div>
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
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}

                    message={<span id="message-id">
                        {this.state.snackbarmsg}
                    </span>}
                    action={[
                        <IconButton
                            key="close"
                            arial-label="Close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        >
                            x
       </IconButton>
                    ]}
                />
                <div className="inputs">
                    <div className="email">
                        <TextField
                            id="outlined-basic"
                            className="emailField"
                            label="Email"
                            name="email"
                            margin="normal"
                            value={this.state.email}
                            onChange={this.handlechangeall}
                            variant="outlined"
                            autoComplete="off"
                        />
                    </div>
                    <div className="email">
                        <TextField
                            id="outlined-basic"
                            className="emailField"
                            label="password"
                            name="password"
                            margin="normal"
                            value={this.state.password}
                            onChange={this.handlechangeall}
                            variant="outlined"
                        />
                    </div>
                </div>
                <div className="submit">
                    <div className="text"
                    onClick={this.handleRegisterSubmit}>
                        Sign up instead ?
          </div>
                    <div className="text"
                    onClick={this.handleForgotPassSubmit}>
                        forgot password ?
</div>
                    <Button
                        className="submitBtn"
                        variant="contained"
                        onClick={this.handleLoginSubmit}
                    >
                        Log In
      </Button>
                </div>
            </Card>
        )
    }
}

export default Login;