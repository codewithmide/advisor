import React, { useState, MouseEvent } from 'react';
import './body.scss';
import propTypes from 'prop-types';


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
            </div>
        </div>
    );
}

Body.propTypes = {
    author: propTypes.string,
    quote: propTypes.string
}

Body.defaultProps = {
    author: '',
    quote: ''
}