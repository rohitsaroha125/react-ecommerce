import React from 'react'
import Signin from '../../components/signin/signin.component.jsx'
import Signup from '../../components/signup/signup.component'
import './signin.style.scss'

const SigniinPage=() => {
    return(
        <div className="signin">
            <Signin></Signin>
            <Signup></Signup>
        </div>
    )
}

export default SigniinPage;