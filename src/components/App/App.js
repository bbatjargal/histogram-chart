import React from 'react';
import './App.css';

import Header from './Header'
import Footer from './Footer'
import Histogram from "../Histogram/Histogram"
import data from '../../data/data'

function App() {

  return (
    <div className="App">
      <Header />
      <Histogram data={data} 
        ylabel="Counts" 
        xlabel="Fruits"
        width="800"
        height="500" />
      <Footer />
    </div>
  );
}

export default App;
