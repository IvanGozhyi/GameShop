import React from 'react';
import AuthForm from "../../forms/authform/AuthForm.jsx";
import "./AuthPage.css"

function AuthPage() {
    return (
        <div className="auth-wrapper">
            <AuthForm/>
            <div className="signUp">Don`t have account?
                <p>Just <a href="/register">sign up</a></p>
            </div>
        </div>
    );
}

export default AuthPage;