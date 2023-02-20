import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Body from '../Body/body';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <main className='main'>
          <Body />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
