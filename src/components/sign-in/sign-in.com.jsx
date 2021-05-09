import React from 'react';
import CustomButton from '../custom-button/custom-button.com';

import {signInWithGoogle} from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.com';
import './sign-in.sty.scss';


class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }

    }
// Methods
handleSubmit = event => {
    event.preventDefault();
    this.setState({email:'',password:''})
}
handleChange = event => {
    const {value,name} = event.target;
    this.setState({[name]:value})
} 
//
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput label='Email' handleChange={this.handleChange}  name='email' type='email' value={this.state.email} required  />
                    <FormInput label='Password' handleChange={this.handleChange} name='password' value={this.state.password} type='password' required  />
                </form>
                <div className='buttons' >
                <CustomButton type='submit'>
                    Sign In
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign In With Google
                </CustomButton>
                </div>
            </div>
        )
    }
}

export default SignIn;