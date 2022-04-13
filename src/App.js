import React from 'react';
import './sass/style.scss';
import Heading from './components/Heading';
import HeaderText from './components/Header-text';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='page-wrapper'> 
        <Heading />
        <main>
          <HeaderText />
          <Card />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
