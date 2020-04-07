import React from 'react'
import Forminput from '../form-input/form-input.component'
import CustomButton from '../customButton/customButton.component'
import './signup.style.scss'

import { auth, createuserDocument } from '../../firebase/firebase.util'

class Signup extends React.Component
{
    constructor()
    {
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleChange=(event) =>
    {
        const { name, value }=event.target
        this.setState({[name]: value})
    }

    handleSubmit=async (event) => {
        event.preventDefault();
        console.log("running")
        const { displayName, email, password, confirmPassword }=this.state

        if(password!=confirmPassword)
        {
            alert("Password don't match")
            return;
        }

        try{

            const {user}=await auth.createUserWithEmailAndPassword(email, password)
            await createuserDocument(user,displayName)

            this.setState({
                displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            })

        }catch(error){
            console.log(error)
        }

    }

    render()
    {
        const { displayName, email, password, confirmPassword }=this.state
        return(<div className="sign-up">
        <h2 className="title">Don't have an account</h2>
        <span>Sign Up with your email and name</span>
        <form onSubmit={this.handleSubmit}>
        <Forminput name="displayName" label="name" type="text" handleChange={this.handleChange} value={this.state.displayName} required/>
            <Forminput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required/>
            <Forminput name="password" label="password" type="password" handleChange={this.handleChange} value={this.state.password} required/>
            <Forminput name="confirmPassword" label="password" type="password" handleChange={this.handleChange} value={this.state.confirmPassword} required/>
            <div className="buttons">
            <CustomButton type="submit" value="Sign Up" />
            </div>
        </form>
    </div>)
    }
}

export default Signup