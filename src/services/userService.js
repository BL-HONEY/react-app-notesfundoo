import './httpService';
import { post } from './httpService';

export function register(options) {
    console.log("register data in user services--> ", options)
    let resgisterData = post(options);
    return resgisterData;
}

export function login(options) {
    console.log("login data in user services--> ", options)
    let loginData = post(options);
    return loginData;
}

export function forgotPassword(options) {
    console.log("forgotPassword data in user services--> ", options)
    let forgotPassData = post(options);
    return forgotPassData;
}

export function resetPassword(options) {
    console.log("resetPassword data in user services--> ", options)
    let resetPassword = post(options);
    return resetPassword;
}
