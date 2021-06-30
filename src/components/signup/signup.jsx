import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './signup.scss';

import firebase from "../../firebase";

const Signup = () => {

    const [signedUp, setSignedUp] = useState(false);
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

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user = userCredential.user;
                console.log(user);

                setSignedUp(true);

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                setErrorMessage(errorMessage);

                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    if (signedUp) {
        return <Redirect to='/' />
    }

    return (
        <div className="signup-container">

            <form onSubmit={handleSubmit} className="signup-form">

                {errorMessage !== '' &&
                    <div className="signup-form__error-message">{errorMessage}</div>
                }
                <h1>Sign up</h1>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" />
                </fieldset>

                <button type="submit">Sign up</button>
            </form>

        </div>
    );
}

export default Signup;