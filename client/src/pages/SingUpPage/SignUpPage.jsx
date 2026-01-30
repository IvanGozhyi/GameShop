import React from 'react';
import SignUpForm from "../../forms/SingUpForm/SignUpForm.jsx";
import "./SignUpPage.css"

function SignUpPage() {
    return (
        <div className="auth-wrapper">
            <SignUpForm/>
            <div className="signIn">Already have an account?
                <p>Just <a href="/login">sign in</a></p>
                </div>
        </div>
    );
}

export default SignUpPage;