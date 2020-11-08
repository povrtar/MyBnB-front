import React from 'react';
import {connect} from 'react-redux';
import InputForm from './InputForm';
import {signIn}from '../../services/auth';
 const SignInPage=(props)=>( 
     <div>
     <h3>Sign In</h3>
     <InputForm onSubmit={(credentials)=>{
signIn(credentials);
this.history.push("/apartments")
     }}/>
     </div>
 )
 export default connect()(SignInPage)