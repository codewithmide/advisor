import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer-wrapper'>
                <div className='box'>
                    <div className='footer-text'>
                        <p>
                            Built with 💙 by <span><a href="https://github.com/codewithmide">codewithmide</a></span> from 🇳🇬
                        </p>
                    </div>
                    <div className='footer-links'>
                        <a href="https://github.com/codewithmide">
                            <FontAwesomeIcon icon={faGithub} className='github' />
                        </a>

                        <a href="https://twitter.com/Olumide______">
                            <FontAwesomeIcon icon={faTwitter} className='twitter' />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/olumide-micheal7/">
                            <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
                        </a>

                    </div>
                </div>
            </div>
        )
    }
}