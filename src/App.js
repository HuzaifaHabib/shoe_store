import React from 'react';
import './App.css';
import RouterConfig from './route';
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
