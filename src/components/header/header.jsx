import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../auth';

import './header.scss';

const Header = () => {

    const { currentUser, logout } = useAuth();

    const [navActive, setNavActive] = useState(false);

    let { id } = useParams();

    const activateNav = () => {

        setNavActive(!navActive);

        if (navActive) {
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

            <button onClick={activateNav} className={`hamburger hamburger--slider ${navActive && 'is-active'}`} type='button'>
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>

            <nav className={navActive ? 'nav' : 'nav nav--hidden'}>
                <ul className='nav__list'>

                    <li className='nav__list-item' activeClassName=".nav__list-item--active"><Link to='/'>Home</Link></li>
                    
                    {currentUser && <li className='nav__list-item'><Link to='/myposts'>My posts</Link></li>}

                    {currentUser && <li className='nav__list-item'><Link to='/write'>Write</Link></li>}

                    {currentUser && <li className='nav__list-item' onClick={handleLogout}>Log out</li>}

                    {!currentUser && <li className='nav__list-item'><Link onClick={() => setNavActive(false)} to='/login'>Login in</Link></li>}

                    {!currentUser && <li className='nav__list-item'><Link onClick={() => setNavActive(false)} to='/register'>Register</Link></li>}

                </ul>
            </nav>

        </header>
    );
}

export default Header;