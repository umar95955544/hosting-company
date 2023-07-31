import React from 'react';
import Navbarmain from './components/Navbarmain/Navbarmain';
import Herosection from './sections/Herosection/Herosection';
import Clientimages from './sections/Clientimages/Clientimages';
import Fourcards from './sections/Fourcards/Fourcards';
import Pricingtable from './sections/Pricingtable/Pricingtable';
import Slidersection from './sections/SliderSection/Slidersection';
import Footertop from './sections/Footertop/Footertop';
import Footer from './sections/Footer/Footer';
import Blackquote from './sections/Blackquote/Blackquote';
import Apidata from './sections/Apidata/Apidata';
import './App.scss';


function App() {
  return (
    <>
      <Navbarmain />
      <Herosection />
      <Clientimages />
      <Fourcards />
      <Pricingtable />
      <Blackquote />
      <Slidersection />
      <Footertop />
      <Footer />
    </>

  );
}

export default App;
