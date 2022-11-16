import React from "react";
import {useGlobalContext} from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";


function App() {
  return (
    <main>
      <Navbar/>
      <CartContainer/>

    </main>
    
  );
}

export default App;
