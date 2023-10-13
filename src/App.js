import React from "react";

//componens
import Cityname from "./components/Cityname";
import Details from "./components/Details";
import Overdata from "./components/Overdata";

function App() {
  return (
    <div className="w-screen h-screen bg-primary bg-center bg-cover">
      <div className="w-full h-full bg-black/40 text-center px-4">
        <h1 className="text-xl text-white font-bold pt-4 capitalize">weather app msein</h1>
        <Cityname />
        <Details />
        <Overdata />
      </div>
    </div>
  );
}

export default App;
