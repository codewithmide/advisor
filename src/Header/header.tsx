import React from 'react';
import './header.scss';
import logo from '../images/advisor-black.png'

export default class Header extends React.Component {
    render() {
        return (
            <div className='header-wrapper'>
                <nav className="header">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <ul className="links">
                            <li>
                                <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine" target='_blank' rel="noreferrer">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/codewithmide/advisor" target='_blank' rel="noreferrer">
                                    Repository
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}