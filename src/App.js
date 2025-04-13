import React from "react";
import './index.css';
import Navbar from "./Component/Navbar";
import PageFirst from "./Component/PageFirst"
import SecondPage from "./Component/SecondPage";
import LastPage from "./Component/LastPage";
import Footer from "./Component/Footer";


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <PageFirst/>
      <SecondPage/>
      <LastPage/>
      <Footer/>
    
     
            
    </div>
  );
}
export default App;
