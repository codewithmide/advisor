import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Body from '../Body/body';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
