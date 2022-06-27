import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu'
import Footer from './components/Footer';

const items = [
  {
    id: 1,
    value: 'Pulp fiction'
  },
  {
    id: 2,
    value: 'The prestige',
  },
  {
    id: 3,
    value: 'Blade runner'
  }

]

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Header/>

      <Footer/>
    </div>
  );
}

export default App;
