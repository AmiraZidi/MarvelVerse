import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./components/Navbarr";
import CarrouselSec from "./components/CarrouselSec";
import MoviesList from "./components/MoviesList";
import React, { useState } from "react";

function App() {
 
  const [text, settext] = useState("")
  return (
    <div className="App">
      <Navbarr settext={settext}/>
      <CarrouselSec/>
      <MoviesList text={text}/>

    </div>
  );
}

export default App;
