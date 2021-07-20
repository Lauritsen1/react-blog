import { useRef, useState } from 'react';
import { useAuth } from '../../auth';
import { useHistory } from 'react-router-dom';

import './signup.scss';

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const { signup } = useAuth();
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

            await signup(emailRef.current.value, passwordRef.current.value);

            history.push('/');

        } catch (err) {
            
            if (err) {
                setError(err.message);
                return false;
            }

        }

    }

    return (
        <div className='signup-container'>

            <form onSubmit={handleSubmit} className='signup-form'>

                {error !== '' &&
                    <div className='signup-form__error-message'>{error}</div>
                }

                <h1>Sign up</h1>
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

export default Signup;