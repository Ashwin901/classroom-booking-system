import React,{useEffect} from "react";
import Routes from "../src/components/Routes";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() =>{
    AOS.init();
  })

  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;
