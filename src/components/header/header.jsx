import { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import firebase from "../../firebase";

const Header = () => {

    console.log(localStorage.getItem('isLoggedIn'))

    const isLoggedInState = localStorage.getItem('isLoggedIn');

    const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInState);
    const [condition, setCondition] = useState(false);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            setIsLoggedIn(true);
        } else {
            // No user is signed in.
            setIsLoggedIn(false);
        }

        localStorage.setItem('isLoggedIn', isLoggedIn);
    });

    const activateNav = () => {

        setCondition(!condition);

        if (condition) {
            document.body.style.overflowY = "scroll";
        } else {
            document.body.style.overflowY = "hidden";
        }

    }

    const signOut = () => {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setIsLoggedIn(false);
        }).catch((error) => {
            // An error happened.
        });

    }

    return (
        <header className="header">
            <h1><Link to='/'>React <i className="fas fa-blog"></i> Blog</Link></h1>

            <button onClick={activateNav} className={condition ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider"} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <nav className={condition ? "nav" : "nav nav--hidden"}>
                <ul className="nav__list">

                    {isLoggedIn && <li className="nav__list-item"><Link to="/myposts">My posts</Link></li>}

                    {!isLoggedIn && <li className="nav__list-item"><Link onClick={() => setCondition(false)} to="/login">Login in</Link></li>}

                    {isLoggedIn && <li className="nav__list-item" onClick={signOut}>Sign out</li>}

                    {!isLoggedIn && <li className="nav__list-item"><Link onClick={() => setCondition(false)} to="/signup">Sign up</Link></li>}

                </ul>
            </nav>

        </header>
    );
}

export default Header;