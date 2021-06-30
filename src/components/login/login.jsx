import './login.scss';

const login = () => {
    
    return (
        <div className="login-container">

            <form className="login-form">
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

export default login;