import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import '../css/Home.css';
function Home(){
    return(
        <div className="container">
            <div className="login-container">
                <div className="login-form">
                    <div className="heading">
                        <h1>Coming Soon ...</h1>
                    </div>
                    <div className="btns">
                        <Link to="/login" className="btn-1">Login</Link><br/>
                        <Link to="/signUp" className="btn-1">Sign Up</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Home;