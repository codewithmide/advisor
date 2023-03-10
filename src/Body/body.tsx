import React, { useState, MouseEvent } from 'react';
import './body.scss';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import speak from '../Speech/SpeechSynthesis';



export default function Body()  {
    // Quote state
    const [quote, setQuote] = useState<string>('A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn.');

    // Author state
    const [author, setAuthor] = useState<string>('Asiwaju Bola Ahmed Tinubu')

    // Quote generator
    const fetchQuote = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('https://api.quotable.io/random')
          .then(response => response.json())
          .then(data => {
                setQuote(data.content)
                setAuthor(data.author)
        })
    }

    // Twitter share
    const twitterShare = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.open(`https://twitter.com/intent/tweet?text=+${quote} + -${author}`, '_blank');
    }

    const handleClick = () => {
        speak(`${quote} by ${author}`);
    }
      

    return (
        <div className="body">
            <div className='container' id='#quote-box'>
                <form>
                    <section className="text-ctn">
                        <p id='text'>
                            {quote}
                        </p>
                    </section>
                    <section id="author">
                        <span>-{author}</span>
                    </section>
                    <div className='btn-ctn'>
                        <button id="new-quote" onClick={fetchQuote}>
                            New Quote
                        </button>
                    </div>
                </form>
                
                <div className='share'>
                    <button onClick={twitterShare} className='share-btn'>Tweet Quote
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>

                    <button onClick={handleClick} className='voice'>Play Quote
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </button>
                </div>
            </div>
        </div>
    );
}

Body.propTypes = {
    author: propTypes.string,
    quote: propTypes.string,
}

Body.defaultProps = {
    author: '',
    quote: ''
}