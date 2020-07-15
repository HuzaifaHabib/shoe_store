import React from 'react';
import './App.css';
import RouterConfig from './route';
import MiniDrawer from './Components/drawer';
import NavBar from './Components/appbar';
import {CartContextProvider} from './cartContext'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <CartContextProvider>
        <RouterConfig />
      </CartContextProvider>
    </div>
  );
}

export default App;
