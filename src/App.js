import React from 'react';
import './App.css';
import RouterConfig from './route';
import NavBar from './Components/appbar';
import MiniDrawer from './Components/drawer'

function App() {
  return (
    <div className="App">
      <RouterConfig/>
    </div>
  );
}

export default App;
