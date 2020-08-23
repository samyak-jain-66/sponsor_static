import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import {withRouter, Redirect } from 'react-router-dom';
import NavSidebar from './NavSidebar';
import fire from '../fire';
 class Dashboard extends Component{
     constructor(props){
         super(props);
         this.state={
             user:{},
             IsloggedIn:false
         }
         this.handleSignOut=this.handleSignOut.bind(this);
         this.authListener=this.authListener.bind(this);
     }
     componentDidMount(){
         this.authListener();
     }
     handleSignOut(){
        fire.auth().signOut().then(()=> {
            this.setState({
                user:null,
                IsloggedIn:false
            });
            console.log('Signout successful')
          }).catch((error)=> {
            console.log(error);
        });
    }
    authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user:user,IsloggedIn:true});
                console.log(user);
            }else{
                this.setState({user:null,IsloggedIn:false});
            }
        });
    }
    //  logout=()=>{
    //     this.props.history.push('/home');
    //      console.log("User has been logout Successfully");
    //  }
     render(){
         return(
             <div>
                <NavSidebar/>
                <GoogleLogout
                    clientId="753974608245-ig9ohsdnola8m51ri3rkeajlko37mllk.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                >
                </GoogleLogout>
                {this.state.user ? <button onClick={this.handleSignOut}>Sign Out</button>:<Redirect to="/home"></Redirect>}
             </div>
         );
     }
 }
 export default withRouter(Dashboard);