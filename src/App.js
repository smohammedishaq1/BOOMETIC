import './App.css';
import {React,Suspense,lazy } from "react";
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const Sections = lazy(() => import("./Sections"));
function App () {
  
  
  return (
    
    <div className="App">
      <Suspense fallback={<div id="loader"></div>}>
      <Header/>
      <Sections/>
      <Footer/>
      </Suspense>
    </div>
   

    
    
  );
  
}

export default App;
