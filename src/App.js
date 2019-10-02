import React from 'react';
import Particles from 'react-particles-js';
import Navigation  from './components/Navigation/Navigation';
import Logo  from './components/Logo/Logo';
import ImageLinkForm  from './components/ImageLinkForm/ImageLinkForm';
import Rank  from './components/Rank/Rank';
import './App.css';
import 'tachyons';


const particlesOption = {
  particles:{
    number:{
      value: 100,
      density: {
        enable: true,
        value_area: 500 
      }
    }
  }
}
function App() {
  return (
    <div className="App">
    <Particles className= 'particles'
     params={particlesOption} />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm />      
            {/*
            <FaceRecognition />*/}
    </div>
  );
}

export default App;
