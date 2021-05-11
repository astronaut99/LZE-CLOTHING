import React from 'react'
import SignIn from '../../components/sign-in/sign-in.com';
import SignUp from '../../components/sign-up/sign-up.com'

import './signin-signup.sty.scss';


const SignInAndUp = () => (
    <div className='signin-signup'>
        <SignIn/>
        <SignUp/> 
    </div>
)

export default SignInAndUp;