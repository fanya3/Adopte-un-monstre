import React from 'react';
import CinemaDate from './components/CinemaDate'
import './App.css';
import DatingFeature from "./component/DatingFeature"
import Elevator from './component/Elevator';
function App() {
  return (
    <div >
      {/* <DatingFeature /> */}
      <Elevator />
      <CinemaDate/>
    </div>
  );
}

export default App;
