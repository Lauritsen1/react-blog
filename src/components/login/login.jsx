import { useRef, useState } from 'react';
import { useAuth } from '../../auth';
import { useHistory } from 'react-router-dom';

import './login.scss';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const history = useHistory();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(error)

        try {

            setError('');

            await login(emailRef.current.value, passwordRef.current.value);

            history.push('/');

        } catch (err) {

            if (err) {
                setError('Email or password is not valid');
                return false;
            }
            
        }

    }

    return (
        <div className='login-container'>

            <form onSubmit={handleSubmit} className='login-form'>

                {error !== '' &&
                    <div className='login-form__error-message'>{error}</div>
                }

                <h1>Login</h1>
                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' ref={emailRef} />
                </fieldset>

                <fieldset>
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name='password' ref={passwordRef} />
                </fieldset>

                <button type='submit'>Login</button>
            </form>

        </div>
    );
}

export default Login;