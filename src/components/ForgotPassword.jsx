import React from 'react';
import Card from '@material-ui/core/Card';
import '../css/registration.scss';
import '../css/login.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { forgotPassword } from '../services/userService'
import 'react-toastify/dist/ReactToastify.min.css'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';

class ForgotPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            showLoader: false
        }

        this.state = { snackbaropen: false, snackbarmsg: '' };
    }

    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleForgotPassSubmit = (event) => {
        this.setState({ showLoader: true })
        var data = {};
        data.email = this.state.email;


        console.log("data : 37", data);
        let options = {
            data: data,
            purpose: 'userVerification'
        }
        forgotPassword(options)
            .then((response) => {
                console.log("response in fogot jsx: ", response);
                this.setState({ snackbaropen: true, snackbarmsg: "Change password link sent , check your email" });
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

    handleLoginSubmit = () => {
        let path = '/login'
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
                </div>
                <div className="submit">
                    <div className="text"
                    onClick={this.handleRegisterSubmit}>
                        Sign up instead ?
          </div>
                    <div className="text"
                    onClick={this.handleLoginSubmit}>
                        Login ?
</div>
                    <Button
                        className="submitBtn"
                        variant="contained"
                        onClick={this.handleForgotPassSubmit}
                    >
                        Submit
      </Button>
                </div>
            </Card>
        )
    }
}

export default ForgotPassword;