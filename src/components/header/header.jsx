import { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {

    const [condition, setCondition] = useState(false);

    const activateNav = () => {
        setCondition(!condition)
        if (condition) {
            document.body.style.overflowY = "scroll"
        } else {
            document.body.style.overflowY = "hidden"
        }
    }

    return (
        <header className="header">
            <h1><Link to='/'>React <i className="fas fa-blog"></i> Blog</Link></h1>

            <button onClick={activateNav} className={condition ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider"} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <nav className={condition ? "nav visible" : "nav nav--hidden"}>
                <ul className="nav__list">
                    <li className="nav__list-item"><Link to="/login">Login in</Link></li>
                    {/* <li className="nav__list-item">Sign out</li> */}
                    <li className="nav__list-item"><Link to="/signup">Sign up</Link></li>
                    {/* <li className="nav__list-item">My posts</li> */}
                </ul>
            </nav>

        </header>
    );
}

export default Header;