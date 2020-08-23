import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import '../css/Login.css';
import {withRouter } from 'react-router-dom';
import fire from '../fire';
import * as firebase from 'firebase';
import 'firebase/auth';
class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            emailId :'',
            phone : '',
        }
        this.handleGoogleLogin=this.handleGoogleLogin.bind(this);
        this.handleFacebookLogin=this.handleFacebookLogin.bind(this);
    }
    handleGoogleLogin(e){
        e.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).then(() => this.props.history.push('/dashboard'))
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    handleFacebookLogin(){
        var provider = new firebase.auth.FacebookAuthProvider();
        fire.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(token);
            console.log(user);
            this.props.history.push("/dashboard");
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);
            console.log(credential);
          });
    }
    //     responseGoogle = (response) => {
    //     console.log(response);
    //     this.props.history.push('/dashboard');
    //   }
    render() {
        return (
            <div className="container-1">
                <div className="login-container-1">
                    <div className="login-form-1">
                        <div className="content">
                            <div className="image">
                                <img src="/images/logo.png" alt="logo" width="200px" height="200px"/>
                            </div>
                            <h1 className="heading-1">Welcome Back,</h1>
                            <h3 className="heading-12">Sign In to continue access pages</h3>
                        </div>
                        <div className="form">
                            <h2 className="heading-secondary">Sign In</h2>
                            <form>
                                <input type="email" name="email" className="box" placeholder="Email Address"/><br/>
                                <input type="password" name="password" className="box" placeholder="password"/><br/>
                                <Link to="/home" className="forgot">Forgot Password</Link><br/>
                                <Link to="/home" className="btn login">Continue</Link><br/>
                                {/* <GoogleLogin
                                    clientId="753974608245-ig9ohsdnola8m51ri3rkeajlko37mllk.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                /> */}
                                <button onClick={this.handleFacebookLogin}>Login With Facebook</button>
                                <button onClick={this.handleGoogleLogin}>Login With Google</button>
                                <Link to="/home" className="btn facebook">Login With Facebook </Link><br/>
                                <Link to="/home" className="btn twitter">Login With Twitter </Link><br/>
                                <div className="join">
                                    New to Sponsar Me &nbsp;&nbsp; <Link to="/home">Join Now</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginComponent);
