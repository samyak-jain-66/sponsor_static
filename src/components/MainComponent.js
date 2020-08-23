import React,{Component} from 'react';
import Home from './HomeComponent';
import Login from './LoginComponent';
import SignUp from './SignUpComponent';
import Phone from './PhoneNumber';
import fire from '../fire';
import Dashboard from './DashboardComponent';
import {Switch, Route,Redirect} from 'react-router-dom';
class Main extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/home" component={()=><Home/>}/>
                    <Route exact path="/login" component={()=><Login/>}/>
                    <Route exact path="/signup" component={()=><SignUp/>}/>
                    <Route exact path="/phone" component={()=><Phone/>}/>
                    <Route exact path="/dashboard" component={()=><Dashboard/>}/>
                    <Redirect to="/home"></Redirect>
                </Switch>
            </div>
        );
    }
}
export default Main;