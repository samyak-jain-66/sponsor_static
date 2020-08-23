import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SignUpComponent extends Component {
    render() {
        return (
            <div class="container-1">
                <div class="login-container-1">
                    <div class="login-form-1">
                        <div class="form">
                            <h2 class="heading-secondary">Sign Up</h2>
                            <form class="input-form">
                                <label for="name">Enter Name</label>
                                <input type="text" name="name" class="box" placeholder="Email Address"/><br/>
                                <label for="email">Enter Email</label>
                                <input type="email" name="email" class="box" placeholder="Email Address"/><br/>
                                <label for="password">Enter Password</label>
                                <input type="password" name="password" class="box" placeholder="password"/><br/>
                                <input type="radio" class="radio1" name="brand" value="brand"/><span class="radio">Brand</span>
                                <input type="radio" class="radio1" name="promoter" value="promoter"/><span class="radio">Promoter</span>
                                <input type="radio" class="radio1" name="influencer" value="influencer"/><span class="radio">Influencer</span>
                                <Link to="/home" class="btn login">Continue</Link><br/>
                            </form>
                        </div>
                        <div class="content">
                            <div class="image-1">
                                <img src="/images/logo.png" alt="logo" width="200px" height="200px"/>
                            </div>
                            <h1 class="heading-1">Getting Started,</h1>
                            <h3 class="heading-12">Sign Up to access sponsorships</h3>
                            <h3 class="heading-12">Sponsorship Made Effortless</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpComponent
