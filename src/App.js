import React from 'react';
import './App.scss';
import Header from './components/header'
import MiniContainer from './components/mini_container'
import Exclusive from './components/exclusive'
import Featured from './components/featured'

function App() {
  return (  
    <div className="App">
      <Header /> 
      <MiniContainer />
      <Exclusive />
      <Featured />
    </div>
  );
}
export default App;