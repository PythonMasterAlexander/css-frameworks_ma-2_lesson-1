import React from 'react';

import './sass/style.scss';
import Heading from './components/Heading';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='page-wrapper'> 
        <div className='body-container'>
          <Heading />
          <main>
            <section>
              <p>Aliquam interdum nec turpis eget feugiat. Phasellus augue turpis, scelerisque 
              ut risus quis, malesuada sagittis risus. Sed imperdiet venenatis quam, ac laoreet nisl blandit ut. 
              Morbi laoreet vitae dolor ac vulputate.</p>
            </section>
            <section className='main__card-container'>
              <div>
                <h3>Title</h3>
                <p>Nunc aliquet finibus lectus. Aliquam id egestas dui. 
                Ut sodales gravida lorem eleifend varius. Nam vitae iaculis mi, quis laoreet dui. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus sodales massa eget libero suscipit venenatis.</p>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
