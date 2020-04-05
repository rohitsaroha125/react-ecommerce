import React from 'react'

import './signin.style.scss'
import Forminput from '../form-input/form-input.component.jsx'
import CustomButton from '../customButton/customButton.component.jsx'
import { Signingoogle } from '../../firebase/firebase.util.js'

class Signin extends React.Component{
    constructor(props)
    {
        super(props)

        this.state={
            email : '',
            password: ''
        }
    }

    handleSubmit=(event) => {
        event.preventDefault();

        this.setState({email: '',password: ''})
    }

    handleChange=(event) => {
        const {name, value}=event.target

        this.setState({[name]: value})
    }

    render()
    {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Forminput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required/>
                    <Forminput name="password" label="password" type="password" handleChange={this.handleChange} value={this.state.password} required/>
                    <div className="buttons">
                    <CustomButton type="submit" value="Submit Form" />
                    <CustomButton type="button" click isGoogle handleClick={ Signingoogle } value="Google SignIn" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin