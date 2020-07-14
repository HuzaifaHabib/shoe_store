import React from 'react';
import './App.css';
import RouterConfig from './route';
import MiniDrawer from './Components/drawer';
import NavBar from './Components/appbar';

function App() {
  return (
    <div className="App">
      <NavBar />
     <RouterConfig />
    </div>
  );
}

export default App;
