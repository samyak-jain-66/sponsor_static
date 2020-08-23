import React,{Component} from 'react';
import fire from '../fire';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';

class Phone extends Component{
    // componentDidMount(){
    //     window.onload=function(){
    //         test();
    //     }
    //     function test(){
    //         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    //         recaptchaVerifier.render();
    //     }
    // }
     phoneAuth(){
         var number = document.getElementById('number').value;
         let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
         
         firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(confirmationResult){
             let code = prompt("Enter Code");
             if (code==null) return;
             confirmationResult.confirm(code).then(function(result){
                 console.log(result.user);
                 document.querySelector('label').textContent = result.user.phoneNumber + "Number Verified";
             });
            // window.confirmationResult = confirmationResult;
            // coderesult=confirmationResult;
            // console.log(coderesult);
         }).catch(function(error){
             console.log(error.message);
         });
    }
    // codeVerify(){
    //     var code = document.getElementById('verificationCode').value;
    //     confirmationResult.confirm(code).then(function(result){
    //         alert("Successfully Register");
    //         var user = result.user;
    //         console.log(user);
    
    //     }).catch(function(error){
    //         console.log(error.message);
    //     });
    // }
    render(){
        return(
            <div>
                <div>
                    <h1>Enter Phone Number to Login </h1>
                    <label></label>
                    <form>
                        <input type="text" id="number" placeholder="Enter Number"></input>
                        <div id="recaptcha-container"></div>
                        <button type="button" onClick={this.phoneAuth}>Submit</button>
                    </form>
                    {/* <h1>Enter Verification Code</h1> */}
                    {/* <form>
                        <input type="text" id="verificationCode" placeholder="Enter Code"></input>
                        <button type="button" onClick="codeVerify()">Verify Code</button>
                    </form> */}
                </div>
               
            </div>
        );
    }
}
export default Phone;