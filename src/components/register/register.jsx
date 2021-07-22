import { useRef, useState } from 'react';
import { useAuth } from '../../auth';
import { useHistory } from 'react-router-dom';

import './register.scss';

const Register = () => {

    const displayNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const { register } = useAuth();
    const history = useHistory();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setError('');

            if (passwordRef.current.value !== repeatPasswordRef.current.value) {
                setError('Passwords doesnt match');
                return false;
            }

            await register(emailRef.current.value, passwordRef.current.value, displayNameRef.current.value);

            history.push('/');

        } catch (err) {
            
            if (err) {
                setError(err.message);
                return false;
            }

        }

    }

    return (
        <div className='register-container'>

            <form onSubmit={handleSubmit} className='register-form'>

                {error !== '' &&
                    <div className='register-form__error-message'>{error}</div>
                }

                <h1>Sign up</h1>

                <fieldset>
                    <label htmlFor='displayName'>Display name</label>
                    <input type='text' id='displayName' name='displayName' ref={displayNameRef} />
                </fieldset>

                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' ref={emailRef} />
                </fieldset>

                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' ref={passwordRef} />
                </fieldset>

                <fieldset>
                    <label htmlFor='repeatPassword'>Repeat password</label>
                    <input type='password' id='repeatPassword' name='repeatPassword' ref={repeatPasswordRef} />
                </fieldset>

                <button type='submit'>Sign up</button>
            </form>

        </div>
    );
}

export default Register;