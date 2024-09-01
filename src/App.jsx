import { useState } from 'react';
import './App.css';

function App({ details }) {
  console.log(details)
  return (
    <>
      <div className="card">
        <img className="img" src={details.img} width="100px" height="100px" />
        <h2>{details.heading}</h2>
        <p>{details.descrip}</p>
      </div>
    </>
  );
}

export default App;