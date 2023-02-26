import React from 'react';
import Banner from './components/Banner';
import Main from './components/Main';  
import Footer from './components/Footer';


const App = () => (
  <>
    <Banner/>
    <Main className="flex-grow-1"/>
    <Footer/>
  </>
);

export default App;

    
    