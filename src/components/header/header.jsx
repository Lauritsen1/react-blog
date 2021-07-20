import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth';

import './header.scss';

const Header = () => {

    const { currentUser, logout } = useAuth();

    const [condition, setCondition] = useState(false);

    const activateNav = () => {

        setCondition(!condition);

        if (condition) {
            document.body.style.overflowY = 'scroll';
        } else {
            document.body.style.overflowY = 'hidden';
        }

    }

    const handleLogout = () => {

        logout();

    }

    return (
        <header className='header'>
            <h1><Link to='/'>React <i className='fas fa-blog'></i> Blog</Link></h1>

            <button onClick={activateNav} className={condition ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider'} type='button'>
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>

            <nav className={condition ? 'nav' : 'nav nav--hidden'}>
                <ul className='nav__list'>

                    {currentUser && <li className='nav__list-item'><Link to='/myposts'>My posts</Link></li>}

                    {!currentUser && <li className='nav__list-item'><Link onClick={() => setCondition(false)} to='/login'>Login in</Link></li>}

                    {currentUser && <li className='nav__list-item' onClick={handleLogout}>Log out</li>}

                    {!currentUser && <li className='nav__list-item'><Link onClick={() => setCondition(false)} to='/signup'>Sign up</Link></li>}

                </ul>
            </nav>

        </header>
    );
}

export default Header;