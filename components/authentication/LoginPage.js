import React from 'react';
import {connect} from 'react-redux';
import InputForm from './InputForm';
import {login}from '../../services/auth';
 const LoginPage=(props)=>( 
     <div>
     <h3>Login Page</h3>
     <InputForm onSubmit={(credentials)=>{
login(credentials);

     }}/>
     </div>
 )
 export default connect()(LoginPage)