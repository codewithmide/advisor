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
                            <li>About</li>
                            <li>Documentation</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}