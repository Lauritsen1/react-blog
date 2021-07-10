import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './login.scss';

import firebase from "../../firebase";

const Login = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault()

        let email = e.target.email.value;
        let password = e.target.password.value;

        if (email === '') {
            return false
        }

        if (password === '') {
            return false
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user = userCredential.user;
                console.log(user);

                setLoggedIn(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                setErrorMessage(errorMessage);

                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    if (loggedIn) {
        return <Redirect to='/' />
    }

    return (
        <div className="login-container">

            <form onSubmit={handleSubmit} className="login-form">

                {errorMessage !== '' &&
                    <div className="login-form__error-message">{errorMessage}</div>
                }

                <h1>Login</h1>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" />
                </fieldset>

                <button type="submit">Login</button>
            </form>

        </div>
    );
}

export default Login;