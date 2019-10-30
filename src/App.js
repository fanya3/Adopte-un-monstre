import React from 'react';
import CinemaDate from './components/CinemaDate'
import './App.css';
import DatingFeature from "./component/DatingFeature"
import Elevator from './component/Elevator';
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div >
      <Switch>
        <Route exact path = '/' component={DatingFeature}/>
        <Route path = '/elevator' component={Elevator} />
        <Route path = '/cinemaDate' component={CinemaDate}/>
      </Switch>
    </div>
  );
}

export default App;
